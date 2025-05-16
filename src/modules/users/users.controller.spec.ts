import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';

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
      const guard = Reflect.getMetadata('__guards__', UsersController);
      console.log(guard);
      expect(guard).toEqual([JwtAuthGuard]);
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

  // describe('findAll', () => {
  //   it('管理者ユーザーの場合、全てのユーザーを取得すること', async () => {
  //     const mockUser = { id: '1', role: Role.ADMIN };
  //     const request = { user: mockUser };

  //     // リクエストコンテキストのモック
  //     const context = {
  //       switchToHttp: () => ({
  //         getRequest: () => request,
  //       }),
  //     } as ExecutionContext;

  //     // ガードのテスト
  //     const canActivate = await guard.canActivate(context);
  //     expect(canActivate).toBe(true);

  //     const mockResult = [
  //       { id: '1', email: 'test@example.com', name: 'test', role: Role.USER },
  //     ];
  //     (usersService.findAll as jest.Mock).mockResolvedValue(mockResult);

  //     const result = await controller.findAll();
  //     expect(usersService.findAll).toHaveBeenCalled();
  //   });
  // });

  describe('findOne', () => {});
  describe('update', () => {});
  describe('remove', () => {});
});
