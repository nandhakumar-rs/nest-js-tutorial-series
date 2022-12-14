import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDTO {
  @IsEmail()
  email: string;

  @IsNumber()
  age: string;

  @IsString()
  name: number;

  // add @IsOptional to make the country property optional
  @IsOptional()
  @IsString()
  country: number;
}
