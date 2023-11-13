import { Component, OnInit } from '@angular/core';
import { CocktailAPIService } from 'src/app/services/cocktail-api.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-coctel-list',
  templateUrl: './coctel-list.component.html',
  styleUrls: ['./coctel-list.component.css']
})
export class CoctelListComponent implements OnInit {

  //public alcoholicCoctailList:any = [];
  //public nonAlcoholicCoctailList:any = [];
  public allCocktailsList:any = [];

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

  addCocktailToBodegaPersonal(){
    let flag = 0;
    //si sale todo bien, tiramos el sweet alert positivo
    if(flag == 0){
      this.positiveAddCocktailAlert();
    }else{ //si no, el negativo
      this.negativeAddCocktailAlert();
    }
  }

  positiveAddCocktailAlert() : void{
    Swal.fire({
      icon: "success",
      title: "Trago agregado a tu Bodega Personal",
      showConfirmButton: false,
      timer: 2000
    });
  }

  negativeAddCocktailAlert() : void{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No pudo agregarse el trago"
    });
  }

}
