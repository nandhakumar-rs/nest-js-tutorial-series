import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule], // add user module
  controllers: [],
  providers: [],
})
export class AppModule {}
