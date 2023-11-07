import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
 

  public baseURL: string = "http://localhost:3000/users";

  private user: User | undefined;
  public userLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }


  public async login(email: string, password: string): Promise<boolean> {

    this.userLoggedIn = false;

    try {
      let apiResponse: Observable<User[]> = this.getUserToAuth(email, password);

      let userResponse: User[] = await lastValueFrom(apiResponse);

      this.user = userResponse[0];

      if (this.user) {

        localStorage.setItem('token', this.user.email.toString());
        this.userLoggedIn = true;
      }
    } catch (error) {
      throw error;
    }

    return this.userLoggedIn;
  }

  public logOut(): void {
    this.user = undefined;
    this.userLoggedIn = false;
    localStorage.clear();
  }

  public checkAuthentication(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  public addUser(user : User): Observable<User>{
    return this.http.post<User>(`${this.baseURL}`, user) 
    
}

public getUsers(): Observable<User[]> {
  return this.http.get<User[]>(`${this.baseURL}`);
}

public getUserToAuth(email: string, password: string): Observable<User[]> {
  return this.http.get<User[]>(`${this.baseURL}?email=${email}&password=${password}`);
}

}