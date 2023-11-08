import { IUser } from "./interface";

export class User implements IUser{
    name:         string;
    email:        string;
    password:     string;

    constructor(user?: any){
        this.name = user.name === undefined ? null : user.name;
        this.email = user.email === undefined ? null : user.email;
        this.password = user.password === undefined ? null : user.password;
}
}