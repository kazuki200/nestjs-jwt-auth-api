import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtStrategy, JwtRefreshStrategy],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
