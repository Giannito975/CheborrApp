import { IUser } from "./Interfaces";

export class User implements IUser{
    email: string = '';
    password: string = '';

    constructor(user?:any){
        this.email = user = undefined ? null : user.email;
        this.password = user = undefined ? null : user.password;
    }
}