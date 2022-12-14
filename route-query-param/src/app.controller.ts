import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService, IUser } from './app.service';

@Controller('/user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(@Query() params: any): IUser[] {
    return this.appService.findUsersByName(params.name);
  }

  @Get(':id')
  getUserById(@Param() params: any): IUser {
    return this.appService.findUserById(params.id);
  }
}
