import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public email: string = '';
  public password: string = '';

  constructor(private usersApiService : UsersApiService,private router: Router) { }

  public async initSession() {
  
    try {
      let isLogin: boolean = await this.usersApiService.login(this.email, this.password)

      if (isLogin) {
        this.router.navigate(["/bebidas"])
      }

    } catch (error) {
      console.log(error);
    }
  }

}
