import { Component, OnInit } from '@angular/core';
import { CocktailAPIService } from 'src/app/services/cocktail-api.service';


@Component({
  selector: 'app-coctel-list',
  templateUrl: './coctel-list.component.html',
  styleUrls: ['./coctel-list.component.css']
})
export class CoctelListComponent implements OnInit {

  public alcoholicCoctailList:any = [];
  public nonAlcoholicCoctailList:any = [];
  public allCocktailsList:any = [];

  constructor(private CocktailAPIService:CocktailAPIService){}

  ngOnInit(): void {

  }

  public loadAlcoholicDrinks(){
    this.CocktailAPIService.getAllAlcoholicDrinks()
    .subscribe(respuesta => {
      this.allCocktailsList = respuesta;
    })
  }

  public loadNonAlcoholicDrinks(){
    this.CocktailAPIService.getAllNonAlcoholicDrinks()
    .subscribe(respuesta => {
      this.allCocktailsList = respuesta;
    })
  }
}
