import { IsInt, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class FindDto {
  @ApiProperty({
    description: '1ページあたりのアイテム数',
    example: 10,
    default: 10,
  })
  @IsInt()
  @Min(1)
  @Max(1000)
  @Type(() => Number)
  limit: number = 10;

  @ApiProperty({
    description: 'ページ番号（1から始まる）',
    example: 1,
    default: 1,
  })
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page: number = 1;
}
