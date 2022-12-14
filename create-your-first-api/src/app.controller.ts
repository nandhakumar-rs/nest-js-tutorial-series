import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users') // Add '/user' route
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Change the function name to getUsers
  @Get()
  // Change return type to string[](stirng Array)
  getUsers(): string[] {
    // Change the service method name to getUsers
    return this.appService.getUsers();
  }
}
