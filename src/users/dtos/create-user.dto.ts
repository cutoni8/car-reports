import { IsEmail, IsString } from 'class-validator';

export class CreateUSerDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
