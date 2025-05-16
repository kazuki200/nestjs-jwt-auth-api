import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CryptoService } from '../crypto/crypto.service';
@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: CryptoService,
      useValue: {
        generateHash: jest.fn(),
        compareHash: jest.fn(),
        generateSha256HashBase64: jest.fn(),
      },
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
