import { Injectable } from '@angular/core';
import { User } from './models';
import { UsersApiService } from './users-api.service';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User | undefined;
  public userLoggedIn: boolean = false;

  get currentUser(): User | undefined {
    return this.user;
  }

  constructor(private usersApiService: UsersApiService) { }


  /*return structuredClone(this.user);
   }*/



  public async login(email: string, password: string): Promise<boolean> {
    this.userLoggedIn = false;

    try {
      let apiResponse: Observable<User[]> = this.usersApiService.getUserToAuth(
        email,
        password
      );

      let userResponse: User[] = await lastValueFrom(apiResponse);

      this.user = userResponse[0];

      if (this.user) {
        localStorage.setItem('user', JSON.stringify(this.user));
        this.userLoggedIn = true;
      }
    } catch (error) {
      throw error;
    }

    return this.userLoggedIn;
  }

  public getUserFromLocalStorage(): User | undefined {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.userLoggedIn = true;
    }
    return this.user;
  }

  public logOut(): void {
    this.user = undefined;
    this.userLoggedIn = false;
    localStorage.clear();
  }

  public checkAuthentication(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  public addUser(user: User) {
    return new Promise<User>((resolve, reject) => {
      this.usersApiService.addUser(user).subscribe({
        next: data => resolve(data),
        error: error => reject(error)
      })
    });
  }


}
