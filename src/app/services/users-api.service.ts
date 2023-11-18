import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  
  public baseURL: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }


   public getUsers(): Observable<User[]> {  
    return this.http.get<User[]>(`${this.baseURL}`);
  }


  // getUsers(): Promise<any> {
  //   return this.http.get(`${this.baseURL}`).toPromise();
  // }

  public updateUser(user : User): Observable<any>{
    return this.http.put<User>(`${this.baseURL}/${user.id}`, user) 

 }

  public getUserToAuth(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}?email=${email}&password=${password}`);
  }

  //nuevo get solo para uso del forgot-passwordw
 public getUserToAuthPassword(oldPassword: string, newPassword: string): Observable<User> {
  // Crear un objeto de parámetros de consulta
  const params = {

    oldPassword: oldPassword,
    newPassword: newPassword
  };

  // Haciendo la llamada al servicio y pasando los parámetros como queryParams
  return this.http.get<User>(`${this.baseURL}`, { params });
}

  public addUser(user : User): Observable<User>{
    return this.http.post<User>(`${this.baseURL}`, user) 

}
}
