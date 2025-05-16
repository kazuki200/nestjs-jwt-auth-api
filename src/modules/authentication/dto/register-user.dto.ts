import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  NotContains,
  Validate,
} from 'class-validator';
import { PasswordMatchConstraint } from '../validators/password-match.constraint';

export class RegisterUserDto {
  @ApiProperty({
    description: 'メールアドレス',
    uniqueItems: true,
    nullable: false,
    required: true,
    type: 'string',
    example: 'youremail@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'ユーザー名',
    nullable: false,
    required: true,
    type: 'string',
    example: 'test',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'パスワード: 6文字以上, 1大文字, 1小文字, 1数字',
    nullable: false,
    required: true,
    type: 'string',
    example: 'Password123',
  })
  @IsString()
  @MinLength(6)
  @MaxLength(16)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'パスワードは1大文字, 1小文字, 1数字を含む必要があります',
  })
  @NotContains(' ', { message: 'パスワードにはスペースを含めないでください' })
  password: string;

  @ApiProperty({
    description: '確認用パスワード: パスワードと同じ',
    nullable: false,
    required: true,
    type: 'string',
    example: 'Password123',
  })
  @IsString()
  @IsNotEmpty()
  @Validate(PasswordMatchConstraint)
  passwordconf: string;
}
