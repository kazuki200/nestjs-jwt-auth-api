import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from './response-user.dto';

export class DeleteUserResponseDto {
  @ApiProperty({
    description: '削除されたユーザー情報',
    type: UserResponseDto,
  })
  user: UserResponseDto;

  @ApiProperty({
    description: '削除完了メッセージ',
    example: 'ユーザーが正常に削除されました',
  })
  message: string;
}
