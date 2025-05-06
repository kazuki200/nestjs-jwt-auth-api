import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthResponse } from './auth.interface';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly users: any[] = [];

  async signUp(registerDto: RegisterDto): Promise<AuthResponse> {
    if (registerDto.email === 'test@example2.com') {
      throw new Error('メールアドレスが重複しています');
    }

    return {
      data: {
        id: 'user_123456789',
        name: 'テストユーザー',
        email: registerDto.email,
        verifiedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example',
      refreshToken: new Date().getTime() + 1000 * 60 * 60 * 24 * 30,
    };
  }

  async signIn(loginDto: LoginDto): Promise<AuthResponse> {
    return {
      data: {
        id: 'user_123456789',
        name: 'テストユーザー',
        email: loginDto.email,
        verifiedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example',
      refreshToken: new Date().getTime() + 1000 * 60 * 60 * 24 * 30,
    };
  }
}
