import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UsersService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('signUp ', () => {
    it('有効なデータで登録が成功し適切なユーザー情報が返却される', async () => {
      const registerDto = {
        email: 'test@example1.com',
        password: 'password',
      };
      const result = await authService.signUp(registerDto);
      expect(result.data).not.toHaveProperty('password');
      expect(result).toHaveProperty(
        'token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example',
      );
      expect(result).toHaveProperty(
        'refreshToken',
        new Date().getTime() + 1000 * 60 * 60 * 24 * 30,
      );
    });

    it('emailが重複している場合、エラーが返却される', async () => {
      const registerDto = {
        email: 'test@example2.com',
        password: 'password',
      };
      await expect(authService.signUp(registerDto)).rejects.toThrow(
        'メールアドレスが重複しています',
      );
    });
  });

  describe('signIn ', () => {
    it('ログインが成功した場合は適切なユーザー情報が返却される', async () => {
      const loginDto = {
        email: 'test@example1.com',
        password: 'password',
      };

      const result = await authService.signIn(loginDto);
      expect(result.data).not.toHaveProperty('password');
      expect(result).toHaveProperty(
        'token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example',
      );
      expect(result).toHaveProperty(
        'refreshToken',
        new Date().getTime() + 1000 * 60 * 60 * 24 * 30,
      );
    });
  });

  // describe('validateUser ', () => {
  //   it('ユーザーが存在しない場合はfalseが返却される', async () => {
  //     const result = await authService.validateUser('test@example1.com', 'password');
  //     expect(result).toBe(false);
  //   });

  // });
});
