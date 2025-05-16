import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

@ValidatorConstraint({ name: 'passwordMatch', async: false })
export class PasswordMatchConstraint implements ValidatorConstraintInterface {
  validate(
    passwordconfValue: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    if (!validationArguments) return false;
    const dto = validationArguments.object as CreateUserDto;
    return dto.password === passwordconfValue;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'パスワードが一致しません';
  }
}
