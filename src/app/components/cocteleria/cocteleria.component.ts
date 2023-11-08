import { Component, OnInit } from '@angular/core';
import { CoctelListComponent } from './coctel-list/coctel-list.component';

@Component({
  selector: 'app-cocteleria',
  templateUrl: './cocteleria.component.html',
  styleUrls: ['./cocteleria.component.css']
})
export class CocteleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    CoctelListComponent;
  }

}
