import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CryptoService } from '../crypto/crypto.service';
import { Prisma } from '@prisma/client';
import { Response } from 'express';
import { AuthRefreshTokenService } from './auth-refresh-token.service';
@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usersService: UsersService,
    private readonly cryptoService: CryptoService,
    private readonly authRefreshTokenService: AuthRefreshTokenService,
  ) {}

  async validateUser(email: string, password: string) {
    try {
      const user = await this.usersService.findOne('email', email);

      if (!user) {
        return null;
      }

      const isMatch = await this.cryptoService.compareHash(
        password,
        user.password,
      );

      if (isMatch) {
        return user;
      }
      return null;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return null;
      }
      throw error;
    }
  }

  async login(res: Response, user?: Express.User) {
    if (!user?.id) {
      throw new InternalServerErrorException('ユーザーが見つかりません');
    }

    return this.authRefreshTokenService.generateTokenPair(user, res);
  }
}
