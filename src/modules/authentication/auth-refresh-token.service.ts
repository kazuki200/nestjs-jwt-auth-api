import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CryptoService } from '../crypto/crypto.service';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from 'src/config/env/configuration';
import { PrismaService } from '../prisma/prisma.service';
import { Response } from 'express';
import { cookieConfig } from '../../shared/constants/cookies';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AuthRefreshTokenService {
  constructor(
    private jwtService: JwtService,
    private cryptoService: CryptoService,
    private configService: ConfigService<EnvironmentVariables>,
    private prismaService: PrismaService,
  ) {}

  async generateRefreshToken(
    authUser: Express.User,
    currentRefreshToken?: string,
    currentRefreshTokenExpiresAt?: Date,
  ) {
    const newRefreshToken = this.jwtService.sign(
      {
        sub: authUser.id,
        role: authUser.role,
      },
      {
        secret: this.configService.get('jwtRefreshSecret'),
        expiresIn: '15s',
      },
    );

    if (currentRefreshToken && currentRefreshTokenExpiresAt) {
      const hashedRefreshToken =
        this.cryptoService.generateSha256HashBase64(currentRefreshToken);

      if (
        await this.isRefreshTokenBlackListed(
          hashedRefreshToken,
          authUser.id as string,
        )
      ) {
        throw new UnauthorizedException('Unauthorized');
      }

      await this.prismaService.authRefreshToken.create({
        data: {
          hashedRefreshToken,
          expiresAt: currentRefreshTokenExpiresAt,
          userId: authUser.id as string,
        },
      });
    }

    return newRefreshToken;
  }

  async isRefreshTokenBlackListed(hashedRefreshToken: string, userId: string) {
    const refreshToken = await this.prismaService.authRefreshToken.findFirst({
      where: {
        hashedRefreshToken,
        userId,
      },
    });
    return refreshToken ? true : false;
  }

  async generateTokenPair(
    user: Express.User,
    res: Response,
    currentRefreshToken?: string,
    currentRefreshTokenExpiresAt?: Date,
  ) {
    const payload = { sub: user.id, role: user.role };

    res.cookie(
      cookieConfig.refreshToken.name,
      await this.generateRefreshToken(
        user,
        currentRefreshToken,
        currentRefreshTokenExpiresAt,
      ),
      {
        ...cookieConfig.refreshToken.options,
      },
    );

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  @Cron(CronExpression.EVERY_DAY_AT_6AM)
  async clearExpiredRefreshTokens() {
    await this.prismaService.authRefreshToken.deleteMany({
      where: {
        expiresAt: {
          lte: new Date(),
        },
      },
    });
  }
}
