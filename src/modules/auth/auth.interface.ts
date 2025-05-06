import { User } from 'generated/prisma';

export interface AuthResponse {
  data: Omit<User, 'password'>;
  token: string;
  refreshToken: number;
}
