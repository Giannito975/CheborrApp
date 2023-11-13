import { Component, OnInit } from '@angular/core';
import { CocktailAPIService } from 'src/app/services/cocktail-api.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-coctel-list',
  templateUrl: './coctel-list.component.html',
  styleUrls: ['./coctel-list.component.css']
})
export class CoctelListComponent implements OnInit {

  //public alcoholicCoctailList:any = [];
  //public nonAlcoholicCoctailList:any = [];
  public allCocktailsList:any = [];
  corazonColor = 'black';
  botonColor = 'blue';

  constructor(private CocktailAPIService:CocktailAPIService){}

  ngOnInit(): void {
    this.loadAlcoholicDrinks();
    this.loadNonAlcoholicDrinks();
  }

  loadAlcoholicDrinks(){
    this.CocktailAPIService.getAllAlcoholicDrinks()
    .subscribe(respuesta => {
      this.allCocktailsList = respuesta;
    })
  }

  loadNonAlcoholicDrinks(){
    this.CocktailAPIService.getAllNonAlcoholicDrinks()
    .subscribe(respuesta => {
      this.allCocktailsList = respuesta;
    })
  }

  verMas(): void {
    console.log('Ver más clickeado.');
    // Puedes agregar lógica adicional aquí.
  }

  toggleCorazon(): void {
    this.corazonColor = this.corazonColor === 'red' ? 'black' : 'red';
    console.log('Botón de corazón clickeado.');
    // Puedes agregar lógica adicional aquí.
  }

  cambiarColorBoton(): void {
    this.botonColor = this.botonColor === 'blue' ? 'green' : 'blue';
    console.log('Botón clickeado. Color actual:', this.botonColor);
    // Puedes agregar lógica adicional aquí.
  }

}
