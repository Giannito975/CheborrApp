import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/models';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  public user: User = new User();
  public passwordConfirm: string = '';

  public email: string = '';
  public password: string = '';

  constructor(private usersApiService : UsersApiService,private authService: AuthService,private router: Router){}

  public registerUser(){
    this.usersApiService.addUser(this.user);
    this.router.navigate(["/home"]);
    console.log(this.user);
  }

  public async initSession() {
  
    try {
      let isLogin: boolean = await this.authService.login(this.email, this.password)

      if (isLogin) {
        this.router.navigate(["/home"]);
      }

    } catch (error) {
      console.log(error);
    }
  }

} 
  