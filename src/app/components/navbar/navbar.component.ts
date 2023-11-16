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

  
  currentUser: User | undefined;

  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
    // Inicializa currentUser con el estado actual del servicio
    this.currentUser = this.authService.currentUser;
  }

  public logOut() {
    this.authService.logOut();
    this.router.navigate(['']);
  }

  get userLoggedIn() {
    return this.authService.userLoggedIn;
  }
  
}
