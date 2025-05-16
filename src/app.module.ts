import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { FormsModule } from './modules/forms/forms.module';
import { ResponsesModule } from './modules/responses/responses.module';
import { PublicModule } from './modules/public/public.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { CryptoModule } from './modules/crypto/crypto.module';
import { PrismaModule } from './modules/prisma/prisma.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    FormsModule,
    ResponsesModule,
    PublicModule,
    AuthenticationModule,
    CryptoModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
