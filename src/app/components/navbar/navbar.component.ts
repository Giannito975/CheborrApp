import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{

  constructor(private router: Router, private usersApiService: UsersApiService) { }

  ngOnInit(): void {
  }

  public logOut() {
    this.usersApiService.logOut();
    this.router.navigate(['']);
  }

  get userLoggedIn() {
    return this.usersApiService.userLoggedIn;
  }
  
}
