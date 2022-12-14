import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Change function name to getUsers
  getUsers(): string[] {
    // Change return type to string[](stirng Array)
    return ['userOne', 'userTwo'];
  }
}
