import { IBodegaPersonal, IUser } from "./interface";

export class User implements IUser {
    name: string;
    email: string;
    password: string;

    constructor(user?: any) {
        this.name = user.name === undefined ? null : user.name;
        this.email = user.email === undefined ? null : user.email;
        this.password = user.password === undefined ? null : user.password;
    }
}

export class BodegaPersonal implements IBodegaPersonal {
    userId: string;
    drinkId: string;

    constructor(bodegaPersonal?: any){
        this.userId = bodegaPersonal.userId === undefined ? null : bodegaPersonal.userId;
        this.drinkId = bodegaPersonal.drinkId === undefined ? null : bodegaPersonal.drinkId;
    }
}