import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
@Module({
  imports: [],
  providers: [],
  controllers: [UserController], // add user controller
})
export class UserModule {}
