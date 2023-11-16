import { IBodegaPersonal, IUser } from "./interface";

export class User implements IUser {
  public id: string;
  public name: string;
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

export class BodegaPersonal implements IBodegaPersonal {
  userId: string;
  drinkId: string;

  constructor(bodegaPersonal?: any) {
    this.userId = (bodegaPersonal && bodegaPersonal.userId) || null;
    this.drinkId = (bodegaPersonal && bodegaPersonal.drinkId) || null;
  }

  public set setUserId(value : string){
    this.userId = value;
  }

  public set setDrinkId(value : string){
    this.drinkId = value;
  }
}