import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from '../authorization/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { FindDto } from '../../shared/dto/find.dto';
import { ResourceOwner } from '../authorization/decorators/resource-owner.decorator';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserResponseDto } from './dto/response-user.dto';
import { DeleteUserResponseDto } from './dto/response-user-delete';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: 'ユーザーを作成する',
    description: '管理者のみがユーザーを作成できる',
  })
  @ApiResponse({
    status: 201,
    description: 'Created',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @Roles(Role.ADMIN)
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    summary: '全てのユーザーを取得する',
    description: '管理者のみがユーザーを取得できる',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: UserResponseDto,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @Roles(Role.ADMIN)
  async findAll(@Query() findDto: FindDto) {
    return this.usersService.findAll(findDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'ユーザーを取得する',
    description:
      '特定のIDでユーザーデータを取得するプライベートエンドポイントです。<ul><li>userロールは自身の情報のみアクセス可能です</li><li>adminロールは全てのユーザー情報にアクセスできます</li></ul>',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @Roles(Role.ADMIN)
  @ResourceOwner()
  async findOne(@Param('id') id: string | number) {
    return this.usersService.findOne('id', id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'ユーザーを更新する',
    description:
      'IDでユーザーデータを更新するプライベートエンドポイントです。<ul><li>userロールは自身の情報のみ更新可能です</li><li>adminロールは全てのユーザー情報を更新できます</li><li>roleフィールドの更新はadminロールのみ可能です</li></ul>',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @ResourceOwner()
  @Roles(Role.ADMIN)
  async update(
    @Param('id') id: string | number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update('id', id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'ユーザーを削除する',
    description:
      'IDでユーザーデータを削除するプライベートエンドポイントです。<ul><li>userロールは自身の情報のみ削除可能です</li><li>adminロールは全てのユーザー情報を削除できます</li></ul>',
  })
  @ApiOkResponse({
    description: 'ユーザーが正常に削除されました',
    type: DeleteUserResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @ResourceOwner()
  @Roles(Role.ADMIN)
  async remove(@Param('id') id: string | number) {
    const user = await this.usersService.remove('id', id);
    return {
      user,
      message: 'ユーザーが正常に削除されました',
    };
  }
}
