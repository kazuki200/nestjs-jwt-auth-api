import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CryptoModule } from '../crypto/crypto.module';
@Module({
  controllers: [UsersController],
  imports: [PrismaModule, CryptoModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
