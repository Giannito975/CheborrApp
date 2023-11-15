import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/models';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loggedUserData: User | undefined;

  constructor(private authService: AuthService, public usersApiService: UsersApiService) {}

  ngOnInit() {
    if (this.authService) {
      this.loggedUserData = this.authService.getUserFromLocalStorage();
    } else {
      console.error('AuthService no está inicializado.');
    }
  }

}
