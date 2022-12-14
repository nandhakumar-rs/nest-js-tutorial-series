import { Injectable } from '@nestjs/common';

// user interface
export interface IUser {
  id: number;
  name: string;
  age: number;
}

@Injectable()
export class AppService {
  // list of users
  private users: IUser[] = [
    {
      id: 1,
      name: 'Tamilan',
      age: 23,
    },
    {
      id: 1,
      name: 'Nandha',
      age: 24,
    },
    {
      id: 1,
      name: 'Nandha Kumar',
      age: 24,
    },
  ];

  findUsersByName(nameToBeMatched: string): IUser[] {
    return nameToBeMatched
      ? this.users.filter((user) =>
          // return users with name matching
          // 'name' query param
          user.name.toLowerCase().includes(nameToBeMatched),
        )
      : // returns all the users if the
        // 'name' query param is 'null' or ''
        this.users;
  }

  findUserById(id: string): IUser {
    // return user with id matching 'id' route param
    // By Default when you get value from query or route
    // param it will be string, But in our case user id is of
    // type number. So we are making a type conversion for id
    return this.users.find((user) => user.id === Number(id));
  }
}
