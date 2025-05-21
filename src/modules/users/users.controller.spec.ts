import { FindDto } from './../../shared/dto/find.dto';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';
import { ROLES_KEY } from '../authorization/decorators/roles.decorator';
import { RESOURCE_OWNER_KEY } from '../authorization/decorators/resource-owner.decorator';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;
  let jwtAuthGuard: JwtAuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        JwtAuthGuard,
        {
          provide: UsersService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
    jwtAuthGuard = module.get<JwtAuthGuard>(JwtAuthGuard);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('JwtAuthGuardが適用されている', async () => {
      const roles = Reflect.getMetadata(
        ROLES_KEY,
        UsersController.prototype.create,
      );

      expect(roles).toEqual([Role.ADMIN]);
    });

    it('ユーザーを作成することができる', async () => {
      const dto: CreateUserDto = {
        email: 'test@example.com',
        name: 'test',
        role: Role.USER,
        password: 'password',
        passwordconf: 'password',
      };
      const mockResult = {
        id: '1',
        email: 'test@example.com',
        name: 'test',
        role: Role.USER,
      };
      (usersService.create as jest.Mock).mockResolvedValue(mockResult);

      const result = await controller.create(dto);
      expect(usersService.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual(mockResult);
    });
  });

  describe('findAll', () => {
    it('JwtAuthGuardが適用されている', async () => {
      const roles = Reflect.getMetadata(
        ROLES_KEY,
        UsersController.prototype.findAll,
      );

      expect(roles).toEqual([Role.ADMIN]);
    });

    it('全てのユーザーを取得すること', async () => {
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

      const mockResult = {
        data: mockUsers,
        total: 10,
        page: 1,
        limit: 2,
        totalPages: 5,
      };

      (usersService.findAll as jest.Mock).mockResolvedValue(mockResult);

      const result = await controller.findAll(findDto);
      expect(usersService.findAll).toHaveBeenCalledWith(findDto);
      expect(result).toEqual(mockResult);
    });
  });

  describe('findOne', () => {
    it('JwtAuthGuardが適用されている', async () => {
      const roles = Reflect.getMetadata(
        ROLES_KEY,
        UsersController.prototype.findOne,
      );
      expect(roles).toEqual([Role.ADMIN]);
    });
    it('ResourceOwnerGuardが適用されている', async () => {
      const resourceOwner = Reflect.getMetadata(
        RESOURCE_OWNER_KEY,
        UsersController.prototype.findOne,
      );
      expect(resourceOwner).toEqual(true);
    });
    it('ユーザーを取得することができる', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        name: 'test',
        role: Role.USER,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        verifiedAt: null,
      };

      (usersService.findOne as jest.Mock).mockResolvedValue(mockUser);

      const result = await controller.findOne('1');
      expect(usersService.findOne).toHaveBeenCalledWith('id', '1');
      expect(result).toEqual(mockUser);
    });
  });

  describe('update', () => {
    it('JwtAuthGuardが適用されている', async () => {
      const roles = Reflect.getMetadata(
        ROLES_KEY,
        UsersController.prototype.update,
      );
      expect(roles).toEqual([Role.ADMIN]);
    });
    it('ResourceOwnerGuardが適用されている', async () => {
      const resourceOwner = Reflect.getMetadata(
        RESOURCE_OWNER_KEY,
        UsersController.prototype.update,
      );
      expect(resourceOwner).toEqual(true);
    });
    it('ユーザーを更新することができる', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        name: 'test',
        role: Role.USER,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        verifiedAt: null,
      };

      (usersService.update as jest.Mock).mockResolvedValue(mockUser);

      const result = await controller.update('1', mockUser);
      expect(usersService.update).toHaveBeenCalledWith('id', '1', mockUser);
      expect(result).toEqual(mockUser);
    });
  });

  describe('remove', () => {
    it('JwtAuthGuardが適用されている', async () => {
      const roles = Reflect.getMetadata(
        ROLES_KEY,
        UsersController.prototype.remove,
      );
      expect(roles).toEqual([Role.ADMIN]);
    });
    it('ResourceOwnerGuardが適用されている', async () => {
      const resourceOwner = Reflect.getMetadata(
        RESOURCE_OWNER_KEY,
        UsersController.prototype.remove,
      );
      expect(resourceOwner).toEqual(true);
    });
    it('ユーザーを削除することができる', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        name: 'test',
        role: Role.USER,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        verifiedAt: null,
      };

      (usersService.remove as jest.Mock).mockResolvedValue(mockUser);

      const result = await controller.remove('1');
      expect(usersService.remove).toHaveBeenCalledWith('id', '1');
      expect(result).toEqual({
        user: mockUser,
        message: 'ユーザーが正常に削除されました',
      });
    });
  });
});
