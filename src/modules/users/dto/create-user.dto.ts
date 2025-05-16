import { RegisterUserDto } from '../../authentication/dto/register-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class CreateUserDto extends RegisterUserDto {
  @ApiProperty({
    description: 'ロール',
    nullable: false,
    required: true,
    type: 'string',
    example: 'USER',
  })
  @IsEnum(Role)
  role: Role;
}
