import { Injectable } from '@angular/core';
import { User } from './models';
import { UsersApiService } from './users-api.service';
import { Observable, lastValueFrom, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public user: User | undefined;
  public userLoggedIn: boolean = false;

  get currentUser(): User | undefined {
    return this.user;
  } 

  constructor(private usersApiService: UsersApiService) {}


  public async login(email: string, password: string): Promise<{success: boolean, name?:string}> {
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
        return { success: true, name: this.user.name };
      }
    } catch (error) {
      throw error;
    }

    return { success: false };
  }

  public getUserFromLocalStorage(): User | undefined {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.userLoggedIn = true;
    }
    return this.user;
  }

  ///recupero de contraseña

  private isPasswordResetEmailSent: boolean = false;

  public getPasswordResetEmailStatus(): boolean {
    return this.isPasswordResetEmailSent;
  }

  public sendPasswordResetEmail(email: string): void {
    setTimeout(() => {
      this.isPasswordResetEmailSent = true;
    }, 2000);
  }

  public logOut(): void {
    this.user = undefined;
    this.userLoggedIn = false;
    localStorage.clear();
  }

  public checkAuthentication(): boolean {
    return localStorage.getItem('user') ? true : false;
  }
  
  public addUser(user: User): Observable<User> {
    return this.usersApiService.addUser(user)
      .pipe(
        tap((addedUser: User) => {
          this.user = addedUser;
          this.userLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(this.user));
        })
      );
  }


//   public addUser(user: User) {
//     return new Promise<User>((resolve, reject) => {
//       this.usersApiService.addUser(user).subscribe({
//         next: (data) => resolve(data),
//         error: (error) => reject(error),
//       });
//     });
//   }
// }
  }
