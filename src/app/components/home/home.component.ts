import { Component, OnInit } from '@angular/core';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(public usersApiService: UsersApiService) {}
    ngOnInit() {
      this.getUserToAuth();
    }
    getUserToAuth() {
      this.usersApiService.getUsers().subscribe((user) => {
        console.log(user);
      });
    }

}
