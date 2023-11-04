import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from '../models/Models';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseURL: string = "http://localhost:4200"

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseURL}/users`);
    }

    getUserToAuth(email: string, password: string): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`);
    }

    public async checkAuth(email:string, password: string): Promise<boolean>{

        let users: User[] = [];
    
        try{
    
          let apiResponse =  this.getUserToAuth(email,password); // Recibo la respuesta de la api en forma de observable
    
          users = await lastValueFrom(apiResponse);// Transformo el observable en una promesa y espero a que se resuelva con el await. Lo que me devuelve es el User[] porque asi se puso en el apiService
    
        }catch(error){
          console.log(error);
        }
    
        return users.length == 1;
      }

}