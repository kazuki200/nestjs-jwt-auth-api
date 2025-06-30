import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UsersService } from '../users/users.service';
import { CryptoService } from '../crypto/crypto.service';
import { AuthRefreshTokenService } from './auth-refresh-token.service';
import { Response } from 'express';
import { Role, User } from '@prisma/client';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { cookieConfig } from '../../shared/constants/cookies';
import { RegisterUserDto } from './dto/register-user.dto';

describe('AuthenticationController', () => {
  let controller: AuthenticationController;
  let authService: AuthenticationService;
  let usersService: UsersService;
  let cryptoService: CryptoService;
  let authRefreshTokenService: AuthRefreshTokenService;

  const mockResponse = {
    cookie: jest.fn(),
    clearCookie: jest.fn(),
    header: jest.fn(),
  } as unknown as Response;

  const mockUser = {
    id: 'user123',
    role: Role.USER,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationController],
      providers: [
        AuthenticationService,
        {
          provide: UsersService,
          useValue: {
            findOne: jest.fn(),
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
        {
          provide: AuthRefreshTokenService,
          useValue: {
            generateTokenPair: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthenticationController>(AuthenticationController);
    authService = module.get<AuthenticationService>(AuthenticationService);
    usersService = module.get<UsersService>(UsersService);
    cryptoService = module.get<CryptoService>(CryptoService);
    authRefreshTokenService = module.get<AuthRefreshTokenService>(
      AuthRefreshTokenService,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('register', () => {
    it('ユーザー登録が成功する', async () => {
      const mockUserDto: RegisterUserDto = {
        email: 'test@test.com',
        password: 'password',
        passwordconf: 'password',
        name: 'test',
      };
      const expectedTokenPair = { access_token: 'mock-token' };

      jest.spyOn(authService, 'register').mockResolvedValue(expectedTokenPair);
      const result = await controller.register(mockUserDto, mockResponse);
      expect(result).toEqual(expectedTokenPair);
    });

    it('すでにユーザーが存在する場合はエラーをスローする', async () => {
      const mockUserDto: RegisterUserDto = {
        email: 'test@test.com',
        password: 'password',
        passwordconf: 'password',
        name: 'test',
      };

      jest
        .spyOn(authService, 'register')
        .mockRejectedValue(new BadRequestException('ユーザーは既に存在します'));

      await expect(
        controller.register(mockUserDto, mockResponse),
      ).rejects.toThrow('ユーザーは既に存在します');
    });
  });

  describe('login', () => {
    it('ログイン成功時にトークンペアを返す', async () => {
      const expectedTokenPair = { access_token: 'mock-token' };
      jest.spyOn(authService, 'login').mockResolvedValue(expectedTokenPair);
      const result = await controller.login(
        { user: mockUser } as any,
        mockResponse,
      );

      expect(result).toEqual(expectedTokenPair);
    });
  });

  describe('me', () => {
    it('ログイン成功時にユーザー情報を返す', async () => {
      const resultUser: Omit<User, 'password'> = {
        id: 'user123',
        name: 'Test User',
        email: 'test@example.com',
        role: Role.USER,
        verifiedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      jest.spyOn(usersService, 'findOne').mockResolvedValue(resultUser as User);
      const result = await controller.me(mockUser, mockResponse);
      expect(result).toEqual(resultUser);
    });
  });

  describe('refreshTokens', () => {
    it('リフレッシュトークンの更新が成功する', async () => {
      const expectedTokenPair = { access_token: 'mock-token' };
      const mockRequest = {
        headers: {
          cookie: 'refresh_token=mock-refresh-token',
        },
      };

      jest
        .spyOn(authRefreshTokenService, 'generateTokenPair')
        .mockResolvedValue(expectedTokenPair);

      const result = await controller.refreshTokens(
        { user: mockUser, ...mockRequest } as any,
        mockResponse,
      );

      expect(result).toEqual(expectedTokenPair);
    });

    it('リクエストにuserがない場合はInternalServerErrorExceptionを返す', async () => {
      const mockRequest = {
        headers: {
          cookie: 'refresh_token=mock-refresh-token',
        },
        user: null, // userをnullに設定
      };

      expect(() =>
        controller.refreshTokens(mockRequest as any, mockResponse),
      ).toThrow(InternalServerErrorException);
    });
  });

  describe('clearAuthCookie', () => {
    it('認証クッキーをクリアする', () => {
      controller.clearAuthCookie(mockResponse as unknown as Response);
      expect(mockResponse.clearCookie).toHaveBeenCalledWith(
        cookieConfig.refreshToken.name,
      );
    });
  });
});
