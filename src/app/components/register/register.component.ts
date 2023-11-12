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

  constructor(private authService: AuthService,private router: Router){}

  public registerUser(){
    this.authService.addUser(this.user);
    this.router.navigate(["/home"]);
    console.log(this.user);
  }

 

} 
  