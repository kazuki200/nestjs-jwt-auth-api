import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CryptoService } from '../crypto/crypto.service';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { FindDto } from 'src/shared/dto/find.dto';
@Injectable()
export class UsersService {
  private readonly logger = new Logger('UserService');

  constructor(
    private readonly cryptoService: CryptoService,
    private readonly prisma: PrismaService,
  ) {}

  async create(dto: CreateUserDto) {
    const hashedPassword = await this.cryptoService.generateHash(dto.password);
    try {
      const newUser = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          name: dto.name,
          role: dto.role,
        },
      });

      return newUser;
    } catch (error) {
      this.prismaErrorHandler(error, 'POST', dto.email);
      this.logger.error(`POST: error: ${error}`);
      throw new InternalServerErrorException('Server error');
    }
  }

  async findAll(findDto: FindDto) {
    try {
      const { page = 1, limit = 10 } = findDto;
      const skip = (page - 1) * limit;

      // 並行してデータ取得と総数を取得
      const [users, total] = await Promise.all([
        this.prisma.user.findMany({
          skip,
          take: limit,
          orderBy: {
            createdAt: 'desc',
          },
        }),
        this.prisma.user.count(),
      ]);

      const totalPages = Math.ceil(total / limit);

      return {
        data: users,
        total,
        page,
        limit,
        totalPages,
      };
    } catch (error) {
      this.prismaErrorHandler(error, 'GET');
      this.logger.error(`GET: error: ${error}`);
      throw new InternalServerErrorException('Server error');
    }
  }

  async findOne(field: 'id' | 'email', value: string | number) {
    const where = { [field]: value } as unknown as Prisma.UserWhereUniqueInput;
    try {
      const user = await this.prisma.user.findUniqueOrThrow({ where });
      return user;
    } catch (error) {
      this.prismaErrorHandler(error, 'GET', value);
      this.logger.error(`GET: error: ${error}`);
      throw new InternalServerErrorException('Server error');
    }
  }

  async update(
    field: 'id' | 'email',
    value: string | number,
    updateUserDto: UpdateUserDto,
  ) {
    // パスワードが更新された場合、ハッシュ化
    let hashedPassword: string | undefined;
    if (updateUserDto.password) {
      hashedPassword = await this.cryptoService.generateHash(
        updateUserDto.password,
      );
    }
    const where = { [field]: value } as unknown as Prisma.UserWhereUniqueInput;
    const { passwordconf, ...newUserData } = updateUserDto;
    try {
      const user = await this.prisma.user.update({
        where,
        data: newUserData,
      });
      return user;
    } catch (error) {
      this.prismaErrorHandler(error, 'PATCH', value);
      this.logger.error(`PATCH: error: ${error}`);
      throw new InternalServerErrorException('Server error');
    }
  }

  async remove(field: 'id' | 'email', value: string | number) {
    const where = { [field]: value } as unknown as Prisma.UserWhereUniqueInput;
    try {
      const user = await this.prisma.user.delete({ where });
      return user;
    } catch (error) {
      this.prismaErrorHandler(error, 'DELETE', value);
      this.logger.error(`DELETE: error: ${error}`);
      throw new InternalServerErrorException('Server error');
    }
  }

  private prismaErrorHandler = (
    error: any,
    method: string,
    value: string | number | null = null,
  ) => {
    if (error.code === 'P2002') {
      this.logger.warn(`${method}: ユーザーは既に存在します: ${value}`);
      throw new BadRequestException('ユーザーは既に存在します');
    }
    if (error.code === 'P2025') {
      this.logger.warn(`${method}: ユーザーが見つかりません: ${value}`);
      throw new BadRequestException('ユーザーが見つかりません');
    }
  };
}
