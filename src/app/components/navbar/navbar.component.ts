import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{

  constructor(private router: Router, private authService: AuthService) { }

  currentUser: User | undefined;
  
  ngOnInit(): void {
    if (this.authService.userLoggedIn) {
      this.currentUser = this.authService.currentUser;
    }
  }

  public logOut() {
    this.authService.logOut();
    this.router.navigate(['']);
  }

  get userLoggedIn() {
    return this.authService.userLoggedIn;
  }
  
}
