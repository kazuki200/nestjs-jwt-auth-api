import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UsersService } from '../users/users.service';
import { AuthRefreshTokenService } from './auth-refresh-token.service';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Throttle } from '@nestjs/throttler';
import { UserLoginDto } from '../users/dto/user-login.dto';
import { Public } from './decorators/public.decorator';
import { Request, Response } from 'express';
import { User } from './decorators/user.decorator';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';
import {
  cookieConfig,
  extractRefreshTokenFromCookies,
} from '../../shared/constants/cookies';
import { RegisterUserDto } from './dto/register-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthenticationController {
  constructor(
    private userService: UsersService,
    private authenticationService: AuthenticationService,
    private authRefreshTokenService: AuthRefreshTokenService,
  ) {}

  @ApiBody({ type: RegisterUserDto })
  @Public()
  @Post('register')
  register(
    @Body() userDto: RegisterUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authenticationService.register(userDto, res);
  }

  @Throttle({
    short: { limit: 2, ttl: 1000 },
    long: { limit: 5, ttl: 60000 },
  })
  @ApiBody({ type: UserLoginDto })
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.authenticationService.login(res, req.user);
  }

  @ApiBearerAuth()
  @Get('me')
  async me(
    @User() authUser: Express.User,
    @Res({ passthrough: true }) res: Response,
  ) {
    res.header('Cache-Control', 'no-store');
    return this.userService.findOne('id', authUser.id);
  }

  @Throttle({
    short: { limit: 1, ttl: 1000 },
    long: { limit: 2, ttl: 60000 },
  })
  @ApiBearerAuth()
  @Public()
  @UseGuards(JwtRefreshAuthGuard)
  @Post('refresh-tokens')
  refreshTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    if (!req.user) {
      throw new InternalServerErrorException();
    }

    return this.authRefreshTokenService.generateTokenPair(
      (req.user as any).attributes,
      res,
      extractRefreshTokenFromCookies(req) as string,
      (req.user as any).refreshTokenExpiresAt,
    );
  }

  @Public()
  @Post('clear-auth-cookie')
  clearAuthCookie(@Res({ passthrough: true }) res: Response) {
    res.clearCookie(cookieConfig.refreshToken.name);
  }
}
