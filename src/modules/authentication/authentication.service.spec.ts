import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from './authentication.service';
import { PrismaService } from '../prisma/prisma.service';
import { CryptoService } from '../crypto/crypto.service';
import { Prisma, Role, User } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { AuthRefreshTokenService } from './auth-refresh-token.service';
import { Response } from 'express';
import { RegisterUserDto } from './dto/register-user.dto';
import { BadRequestException } from '@nestjs/common';

describe('AuthenticationService', () => {
  let authService: AuthenticationService;
  let prismaService: PrismaService;
  let usersService: UsersService;
  let cryptoService: CryptoService;
  let authRefreshTokenService: AuthRefreshTokenService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthenticationService,
        {
          provide: UsersService,
          useValue: {
            findOne: jest.fn(),
            create: jest.fn(),
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
        {
          provide: AuthRefreshTokenService,
          useValue: {
            generateTokenPair: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthenticationService>(AuthenticationService);
    prismaService = module.get<PrismaService>(PrismaService);
    usersService = module.get<UsersService>(UsersService);
    cryptoService = module.get<CryptoService>(CryptoService);
    authRefreshTokenService = module.get<AuthRefreshTokenService>(
      AuthRefreshTokenService,
    );
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('validateUser', () => {
    const mockObject = {
      email: 'test@test.com',
      password: 'password',
    };
    const returnUser: Omit<User, 'password'> = {
      id: 'abc',
      email: mockObject.email,
      name: 'test',
      verifiedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      role: 'USER',
    };

    it('有効なユーザーが存在してパスワードが正しい場合はuserを返す', async () => {
      (usersService.findOne as jest.Mock).mockResolvedValue(returnUser);
      (cryptoService.compareHash as jest.Mock).mockResolvedValue(true);
      const user = await authService.validateUser(
        mockObject.email,
        mockObject.password,
      );

      expect(user).toEqual(returnUser);
    });
    it('有効なユーザーが存在してパスワードが間違っている場合はnullを返す', async () => {
      (usersService.findOne as jest.Mock).mockResolvedValue(returnUser);
      (cryptoService.compareHash as jest.Mock).mockResolvedValue(false);

      const user = await authService.validateUser(
        mockObject.email,
        mockObject.password,
      );
      expect(user).toBeNull();
    });
    it('有効なユーザーが存在しない場合はnullを返す', async () => {
      (usersService.findOne as jest.Mock).mockRejectedValue(
        new Prisma.PrismaClientKnownRequestError('No record found', {
          code: 'P2025',
          clientVersion: '1.0.0',
          meta: {},
          batchRequestIdx: 0,
        }),
      );
      (cryptoService.compareHash as jest.Mock).mockResolvedValue(false);

      const user = await authService.validateUser(
        mockObject.email,
        mockObject.password,
      );
      expect(user).toBeNull();
    });
  });

  describe('register', () => {
    const mockResponse = {
      cookie: jest.fn(),
    } as unknown as Response;

    it('ユーザー登録ができる', async () => {
      const mockData = {
        access_token: 'mock-access-token',
      };
      const mockUserDto: RegisterUserDto = {
        email: 'test@test.com',
        password: 'password',
        passwordconf: 'password',
        name: 'test',
      };

      const mockResult: Omit<User, 'password'> = {
        id: 'abc',
        email: mockUserDto.email,
        name: mockUserDto.name,
        role: Role.USER,
        verifiedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      (usersService.create as jest.Mock).mockResolvedValue(mockResult);
      (
        authRefreshTokenService.generateTokenPair as jest.Mock
      ).mockResolvedValue(mockData);

      const result = await authService.register(mockUserDto, mockResponse);
      expect(result).toEqual(mockData);
    });

    it('すでにユーザーが存在する場合はエラーをスローする', async () => {
      const mockUserDto: RegisterUserDto = {
        email: 'test@test.com',
        password: 'password',
        passwordconf: 'password',
        name: 'test',
      };

      (usersService.create as jest.Mock).mockRejectedValue(
        new BadRequestException('ユーザーは既に存在します'),
      );

      await expect(
        authService.register(mockUserDto, mockResponse),
      ).rejects.toThrow('ユーザーは既に存在します');
    });
  });

  describe('login', () => {
    const mockUser: Express.User = {
      id: 'abc',
      role: 'USER',
    };
    const mockResponse = {
      cookie: jest.fn(),
    } as unknown as Response;

    it('ユーザーが存在する場合はトークンペアを生成する', async () => {
      const expectedTokenPair = {
        access_token: 'mock-access-token',
      };

      (
        authRefreshTokenService.generateTokenPair as jest.Mock
      ).mockResolvedValue(expectedTokenPair);

      const result = await authService.login(mockResponse, mockUser);

      expect(result).toEqual(expectedTokenPair);
      expect(authRefreshTokenService.generateTokenPair).toHaveBeenCalledWith(
        mockUser,
        mockResponse,
      );
    });

    it('ユーザーが存在しない場合はInternalServerErrorExceptionをスローする', async () => {
      await expect(authService.login(mockResponse)).rejects.toThrow(
        'ユーザーが見つかりません',
      );
      expect(authRefreshTokenService.generateTokenPair).not.toHaveBeenCalled();
    });
  });
});
