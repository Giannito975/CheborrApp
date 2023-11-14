import { IUser } from './interface';

export class User implements IUser {
 public id : string;
 public name : string;
 public email: string;
 public password: string;

  constructor(user?: User) {
    if (user) {
      this.id = user.id || '';
      this.name = user.name || '';
      this.email = user.email || '';
      this.password = user.password || '';
    } else {
      this.id = '';
      this.name = '';
      this.email = '';
      this.password = '';
    }
  }
}
