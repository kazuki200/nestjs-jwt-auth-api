import { Test, TestingModule } from '@nestjs/testing';
import { AuthRefreshTokenService } from './auth-refresh-token.service';
import { CryptoService } from '../crypto/crypto.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthRefreshTokenService', () => {
  let service: AuthRefreshTokenService;
  let prismaService: PrismaService;
  let cryptoService: CryptoService;
  let jwtService: JwtService;
  let configService: ConfigService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthRefreshTokenService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUniqueOrThrow: jest.fn(),
              findFirst: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
              deleteMany: jest.fn(),
              count: jest.fn(),
            },
            authRefreshToken: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUniqueOrThrow: jest.fn(),
              findFirst: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
              deleteMany: jest.fn(),
              count: jest.fn(),
            },
          },
        },
        {
          provide: CryptoService,
          useValue: {
            generateHash: jest.fn(),
            compareHash: jest.fn(),
            generateSha256HashBase64: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthRefreshTokenService>(AuthRefreshTokenService);
    prismaService = module.get<PrismaService>(PrismaService);
    cryptoService = module.get<CryptoService>(CryptoService);
    jwtService = module.get<JwtService>(JwtService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateRefreshToken', () => {
    it('リフレッシュトークンを生成する', async () => {
      // asyncを追加
      const authUser: Express.User = {
        id: 'abc',
        role: Role.USER,
      };

      (jwtService.sign as jest.Mock).mockReturnValue('token');
      (configService.get as jest.Mock).mockReturnValue('secret');

      const newRefreshToken = await service.generateRefreshToken(authUser); // awaitを追加

      expect(configService.get).toHaveBeenCalledWith('jwtRefreshSecret');
      expect(jwtService.sign).toHaveBeenCalledWith(
        {
          sub: authUser.id,
          role: authUser.role,
        },
        {
          secret: configService.get('jwtRefreshSecret'),
          expiresIn: '15s',
        },
      );

      expect(newRefreshToken).toBe('token');
    });
    it('リフレッシュトークンとリフレッシュトークンの有効期限が、設定されている場合はブラックリストに載せる', async () => {
      const authUser: Express.User = {
        id: 'abc',
        role: Role.USER,
      };

      (jwtService.sign as jest.Mock).mockReturnValue('token');
      (configService.get as jest.Mock).mockReturnValue('secret');
      (cryptoService.generateSha256HashBase64 as jest.Mock).mockReturnValue(
        'refreshtoken',
      );
      const newRefreshToken = await service.generateRefreshToken(
        authUser,
        'refreshtoken',
        // 30日後
        new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      );

      expect(cryptoService.generateSha256HashBase64).toHaveBeenCalledWith(
        'refreshtoken',
      );
      expect(prismaService.authRefreshToken.create).toHaveBeenCalledWith({
        data: {
          hashedRefreshToken: 'refreshtoken',
          expiresAt: expect.any(Date),
          userId: authUser.id,
        },
      });
      expect(newRefreshToken).toBe('token');
    });

    it('すでにブラックリストに載っている場合はUnauthorizedExceptionエラーを投げる', () => {
      const authUser: Express.User = {
        id: 'abc',
        role: Role.USER,
      };

      (cryptoService.generateSha256HashBase64 as jest.Mock).mockReturnValue(
        'refreshtoken',
      );
      (prismaService.authRefreshToken.findFirst as jest.Mock).mockResolvedValue(
        {
          hashedRefreshToken: 'refreshtoken',
          expiresAt: expect.any(Date),
          userId: authUser.id,
        },
      );

      expect(
        service.generateRefreshToken(authUser, 'refreshtoken', new Date()),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('isRefreshTokenBlackListed', () => {
    it('ブラックリストに存在するトークンの場合はtrueを返す', async () => {
      const hashedToken = 'hashed-token';
      const userId = 'user-id';

      (prismaService.authRefreshToken.findFirst as jest.Mock).mockResolvedValue(
        {
          hashedRefreshToken: hashedToken,
          userId: userId,
          expiresAt: new Date(),
        },
      );

      const result = await service.isRefreshTokenBlackListed(
        hashedToken,
        userId,
      );
      expect(result).toBeTruthy();
    });

    it('ブラックリストに存在しないトークンの場合はfalseを返す', async () => {
      const hashedToken = 'hashed-token';
      const userId = 'user-id';

      (prismaService.authRefreshToken.findFirst as jest.Mock).mockResolvedValue(
        null,
      );

      const result = await service.isRefreshTokenBlackListed(
        hashedToken,
        userId,
      );
      expect(result).toBeFalsy();
    });
  });

  describe('generateTokenPair', () => {
    it('アクセストークンとリフレッシュトークンを生成する', async () => {
      const user: Express.User = {
        id: 'user-id',
        role: Role.USER,
      };
      const res = {
        cookie: jest.fn(),
      };

      (jwtService.sign as jest.Mock).mockReturnValue('access-token');
      (configService.get as jest.Mock).mockReturnValue('secret');

      const result = await service.generateTokenPair(user, res as any);

      expect(result).toEqual({ access_token: 'access-token' });
      expect(res.cookie).toHaveBeenCalledWith(
        'refreshToken',
        expect.any(String),
        expect.any(Object),
      );
    });
  });

  describe('clearExpiredRefreshTokens', () => {
    it('期限切れのリフレッシュトークンを削除する', async () => {
      await service.clearExpiredRefreshTokens();

      expect(prismaService.authRefreshToken.deleteMany).toHaveBeenCalledWith({
        where: {
          expiresAt: {
            lte: expect.any(Date),
          },
        },
      });
    });
  });
});
