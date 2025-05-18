import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { CryptoService } from '../crypto/crypto.service';
import {
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindDto } from 'src/shared/dto/find.dto';

describe('UsersService', () => {
  let usersService: UsersService;
  let prismaService: PrismaService;
  let cryptoService: CryptoService;
  let logger: Logger;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUniqueOrThrow: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
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

    usersService = module.get<UsersService>(UsersService);
    prismaService = module.get<PrismaService>(PrismaService);
    cryptoService = module.get<CryptoService>(CryptoService);
    logger = new Logger('UserService');

    // Loggerメソッドをスパイ
    jest.spyOn(logger, 'log').mockImplementation(() => {});
    jest.spyOn(logger, 'error').mockImplementation(() => {});
    jest.spyOn(logger, 'warn').mockImplementation(() => {});

    // UserServiceの非公開loggerをモック化したものに置き換え
    Object.defineProperty(usersService, 'logger', { value: logger });
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  describe('create', () => {
    it('新規ユーザーを正常に作成できること', async () => {
      const dto: CreateUserDto = {
        email: 'test@example.com',
        password: 'Password123',
        passwordconf: 'Password123',
        name: 'test',
        role: Role.USER,
      };
      const hashedPassword = dto.password;

      (cryptoService.generateHash as jest.Mock).mockResolvedValue(
        hashedPassword,
      );
      (prismaService.user.create as jest.Mock).mockResolvedValue({
        id: '1',
        email: dto.email,
        name: dto.name,
        createdAt: new Date(),
        role: dto.role,
        updatedAt: new Date(),
        deletedAt: null,
        verifiedAt: null,
      });
      const result = await usersService.create(dto);

      // ハッシュ化メソッドが呼び出されること
      expect(cryptoService.generateHash).toHaveBeenCalledWith(dto.password);

      // prismaService.user.createが呼び出されること
      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: {
          email: dto.email,
          name: dto.name,
          password: hashedPassword,
          role: dto.role,
        },
      });

      expect(result).toEqual({
        id: '1',
        email: dto.email,
        name: dto.name,
        createdAt: expect.any(Date),
        role: dto.role,
        updatedAt: expect.any(Date),
        deletedAt: null,
        verifiedAt: null,
      });
    });

    it('ユーザーが既に存在する場合、BadRequestExceptionをスローすること', async () => {
      const dto: CreateUserDto = {
        email: 'test@example.com',
        password: 'Password123',
        passwordconf: 'Password123',
        name: 'test',
        role: Role.USER,
      };
      (prismaService.user.create as jest.Mock).mockRejectedValue({
        code: 'P2002',
      });

      await expect(usersService.create(dto)).rejects.toThrow(
        BadRequestException,
      );
    });
    it('Prismaが予期せぬエラーをスローした場合、InternalServerErrorExceptionをスローすること', async () => {
      const dto: CreateUserDto = {
        email: 'test@example.com',
        password: 'Password123',
        passwordconf: 'Password123',
        name: 'test',
        role: Role.USER,
      };

      // Prismaからの予期せぬエラーをシミュレート
      (prismaService.user.create as jest.Mock).mockRejectedValue(
        new Error('予期せぬデータベースエラー'),
      );

      await expect(usersService.create(dto)).rejects.toThrow(
        InternalServerErrorException,
      );

      // エラーがログに記録されたことを確認
      expect(logger.error).toHaveBeenCalledWith(
        expect.stringContaining(
          'POST: error: Error: 予期せぬデータベースエラー',
        ),
      );
    });
  });

  describe('findAll', () => {
    it('全てのユーザーを返すこと', async () => {
      const mockUsers = [
        {
          id: '1',
          email: 'test@example.com',
          name: 'test',
          createdAt: new Date(),
          role: Role.USER,
          updatedAt: new Date(),
          deletedAt: null,
          verifiedAt: null,
        },
        {
          id: '2',
          email: 'test2@example.com',
          name: 'test2',
          createdAt: new Date(),
          role: Role.USER,
          updatedAt: new Date(),
          deletedAt: null,
          verifiedAt: null,
        },
      ];
      const findDto: FindDto = {
        limit: 2,
        page: 1,
      };
      (prismaService.user.findMany as jest.Mock).mockResolvedValue(mockUsers);
      (prismaService.user.count as jest.Mock).mockResolvedValue(10);

      const result = await usersService.findAll(findDto);

      // 期待される結果
      expect(result).toEqual({
        data: mockUsers,
        total: 10,
        page: 1,
        limit: 2,
        totalPages: 5,
      });

      // findManyが正しいパラメータで呼ばれたことを確認
      expect(prismaService.user.findMany).toHaveBeenCalledWith({
        skip: 0, // (page - 1) * limit
        take: 2,
        orderBy: {
          createdAt: 'desc',
        },
      });
    });

    it('データが存在しない場合、空の配列を返すこと', async () => {
      const findDto: FindDto = {
        limit: 2,
        page: 1,
      };

      (prismaService.user.findMany as jest.Mock).mockResolvedValue([]);
      (prismaService.user.count as jest.Mock).mockResolvedValue(0);

      const result = await usersService.findAll(findDto);

      expect(result).toEqual({
        data: [],
        total: 0,
        page: 1,
        limit: 2,
        totalPages: 0,
      });
    });

    it('Prismaが予期せぬエラーをスローした場合、InternalServerErrorExceptionをスローすること', async () => {
      const findDto: FindDto = {
        limit: 2,
        page: 1,
      };

      (prismaService.user.findMany as jest.Mock).mockRejectedValue(
        new Error('予期せぬデータベースエラー'),
      );

      await expect(usersService.findAll(findDto)).rejects.toThrow(
        InternalServerErrorException,
      );

      // エラーがログに記録されたことを確認
      expect(logger.error).toHaveBeenCalledWith(
        expect.stringContaining(
          'GET: error: Error: 予期せぬデータベースエラー',
        ),
      );
    });
  });

  describe('findOne', () => {
    it('IDでユーザーを取得できること', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        name: 'test',
        createdAt: new Date(),
        role: Role.USER,
        updatedAt: new Date(),
        deletedAt: null,
        verifiedAt: null,
      };
      const field = 'id';
      const value = '1';

      (prismaService.user.findUniqueOrThrow as jest.Mock).mockResolvedValue(
        mockUser,
      );

      const result = await usersService.findOne(field, value);

      expect(result).toEqual(mockUser);
    });
    it('ユーザーが見つからない場合、BadRequestExceptionをスローすること', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        name: 'test',
        createdAt: new Date(),
        role: Role.USER,
        updatedAt: new Date(),
        deletedAt: null,
        verifiedAt: null,
      };
      const field = 'id';
      const value = '1';
      (prismaService.user.findUniqueOrThrow as jest.Mock).mockRejectedValue({
        code: 'P2025',
      });

      await expect(usersService.findOne(field, value)).rejects.toThrow(
        BadRequestException,
      );
    });
    it('Prismaが予期せぬエラーをスローした場合、InternalServerErrorExceptionをスローすること', async () => {
      const field = 'id';
      const value = '1';
      (prismaService.user.findUniqueOrThrow as jest.Mock).mockRejectedValue(
        new Error('予期せぬデータベースエラー'),
      );

      await expect(usersService.findOne(field, value)).rejects.toThrow(
        InternalServerErrorException,
      );

      // エラーがログに記録されたことを確認
      expect(logger.error).toHaveBeenCalledWith(
        expect.stringContaining(
          'GET: error: Error: 予期せぬデータベースエラー',
        ),
      );
    });
  });

  describe('update', () => {
    it('ユーザーを更新することができる', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        name: 'test',
        createdAt: new Date(),
        role: Role.USER,
        updatedAt: new Date(),
        deletedAt: null,
        verifiedAt: null,
      };
      const field = 'id';
      const value = '1';
      const dto: UpdateUserDto = {
        email: 'test2@example.com',
        name: 'test2',
        password: 'newPassword123',
        passwordconf: 'newPassword123',
      };

      (prismaService.user.update as jest.Mock).mockResolvedValue({
        ...mockUser,
        email: dto.email,
        name: dto.name,
      });

      const result = await usersService.update(field, value, dto);

      expect(cryptoService.generateHash).toHaveBeenCalledWith(dto.password);
      expect(prismaService.user.update).toHaveBeenCalledWith({
        where: { [field]: value },
        data: {
          email: dto.email,
          name: dto.name,
          password: dto.password,
        },
      });
      expect(result).toEqual({
        ...mockUser,
        email: dto.email,
        name: dto.name,
      });
    });
    it('ユーザーが見つからない場合、BadRequestExceptionをスローすること', async () => {
      const field = 'id';
      const value = '1';
      const dto: UpdateUserDto = {
        email: 'test2@example.com',
        name: 'test2',
        password: 'newPassword123',
        passwordconf: 'newPassword123',
      };

      (prismaService.user.update as jest.Mock).mockRejectedValue({
        code: 'P2025',
      });

      await expect(usersService.update(field, value, dto)).rejects.toThrow(
        BadRequestException,
      );
    });
    it('Prismaが予期せぬエラーをスローした場合、InternalServerErrorExceptionをスローすること', async () => {
      const field = 'id';
      const value = '1';
      const dto: UpdateUserDto = {
        email: 'test2@example.com',
        name: 'test2',
        password: 'newPassword123',
        passwordconf: 'newPassword123',
      };

      (prismaService.user.update as jest.Mock).mockRejectedValue(
        new Error('予期せぬデータベースエラー'),
      );

      await expect(usersService.update(field, value, dto)).rejects.toThrow(
        InternalServerErrorException,
      );

      // エラーがログに記録されたことを確認
      expect(logger.error).toHaveBeenCalledWith(
        expect.stringContaining(
          'PATCH: error: Error: 予期せぬデータベースエラー',
        ),
      );
    });
  });

  describe('remove', () => {
    it('ユーザーを削除できること', async () => {
      const field = 'id';
      const value = '1';
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        name: 'test',
        createdAt: new Date(),
        role: Role.USER,
        updatedAt: new Date(),
        deletedAt: null,
        verifiedAt: null,
      };

      (prismaService.user.delete as jest.Mock).mockResolvedValue(mockUser);

      const result = await usersService.remove(field, value);

      expect(result).toEqual(mockUser);
      expect(prismaService.user.delete).toHaveBeenCalledWith({
        where: { [field]: value },
      });
    });

    it('ユーザーが見つからない場合、BadRequestExceptionをスローすること', async () => {
      const field = 'id';
      const value = '1';
      (prismaService.user.delete as jest.Mock).mockRejectedValue({
        code: 'P2025',
      });

      await expect(usersService.remove(field, value)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('Prismaが予期せぬエラーをスローした場合、InternalServerErrorExceptionをスローすること', async () => {
      const field = 'id';
      const value = '1';
      (prismaService.user.delete as jest.Mock).mockRejectedValue(
        new Error('予期せぬデータベースエラー'),
      );

      await expect(usersService.remove(field, value)).rejects.toThrow(
        InternalServerErrorException,
      );

      expect(logger.error).toHaveBeenCalledWith(
        expect.stringContaining(
          'DELETE: error: Error: 予期せぬデータベースエラー',
        ),
      );
    });
  });
});
