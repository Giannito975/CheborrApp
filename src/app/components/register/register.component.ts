import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/services/models';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  public user: User = new User({id:null});
  public passwordConfirm: string = '';

  constructor(private usersApiService : UsersApiService,private router: Router){}

  public registerUser(){
    this.usersApiService.addUser(this.user);
    this.router.navigate(["/bebidas"]);
    console.log(this.user);
  }

} 
