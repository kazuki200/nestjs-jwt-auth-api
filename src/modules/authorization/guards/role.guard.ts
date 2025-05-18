import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { IS_PUBLIC_KEY } from '../../authentication/decorators/public.decorator';
import { Role } from '@prisma/client';
import { RESOURCE_OWNER_KEY } from '../decorators/resource-owner.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    const isResourceOwner = this.reflector.getAllAndOverride<boolean>(
      RESOURCE_OWNER_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles || isPublic) {
      return true;
    }

    const { user, params } = context.switchToHttp().getRequest();
    if (!user) {
      throw new UnauthorizedException('認証が必要です');
      return false;
    }

    // 管理者の場合は、requiredRolesにADMINが含まれているか確認
    if (user.role === Role.ADMIN) {
      if (!requiredRoles.includes(Role.ADMIN)) {
        throw new ForbiddenException('管理者権限が必要です');
      }
      return true;
    }

    // 一般ユーザーの場合
    if (user.role === Role.USER) {
      // リソース所有者チェックが必要な場合
      if (isResourceOwner) {
        if (user.id !== params.id) {
          throw new ForbiddenException('自分のリソースのみアクセス可能です');
        }
        return true;
      }
      // リソース所有者チェックが不要な場合は、ロールのみで判定
      if (!requiredRoles.includes(Role.USER)) {
        throw new ForbiddenException('アクセス権限がありません');
      }
      return true;
    }

    // その他のロールの場合は、requiredRolesに基づいて判定
    if (!requiredRoles.some((role) => user.role === role)) {
      throw new ForbiddenException('アクセス権限がありません');
    }
    return true;
  }
}
