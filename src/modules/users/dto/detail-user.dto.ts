// src/modules/users/dto/user-detail.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class UserDetailDto {
  @ApiProperty({
    description: 'ユーザーID',
    example: '1',
  })
  id: string;

  @ApiProperty({
    description: 'メールアドレス',
    example: 'test@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'ユーザー名',
    example: 'test',
  })
  name: string;

  @ApiProperty({
    description: '作成日時',
    example: '2023-01-01T00:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: '更新日時',
    example: '2023-01-01T00:00:00Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: '削除日時',
    example: '2023-01-01T00:00:00Z',
    nullable: true,
  })
  deletedAt: Date | null;

  @ApiProperty({
    description: 'ロール',
    enum: Role,
    example: Role.USER,
  })
  role: Role;

  @ApiProperty({
    description: 'メール認証日時',
    example: '2023-01-01T00:00:00Z',
    nullable: true,
  })
  verifiedAt?: Date | null;
}
