import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService,private router: Router) { }

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
