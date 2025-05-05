import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule } from './modules/forms/forms.module';
import { ResponsesModule } from './modules/responses/responses.module';
import { PublicModule } from './modules/public/public.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    FormsModule,
    ResponsesModule,
    PublicModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
