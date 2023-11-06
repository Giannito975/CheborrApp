import { Component, OnInit } from '@angular/core';
import { CocktailAPIService } from 'src/app/services/cocktail-api.service';

@Component({
  selector: 'app-coctel-list',
  templateUrl: './coctel-list.component.html',
  styleUrls: ['./coctel-list.component.css']
})
export class CoctelListComponent implements OnInit {

  alcoholicDrinks:string[]=[];
  nonAlcoholicDrinks:string[]=[];
  cocktails:string[]=[];

  constructor(
    private _cocktails:CocktailAPIService,
  ) { }

  ngOnInit(): void {
   this.fetchAlcoholicDrinks();
   this.fetchNonAlcoholicDrinks();
  }


  fetchAlcoholicDrinks(){
    this._cocktails.getAllAlcoholicDrinks().subscribe((data:any)=>{
      console.log(data);
      let tempDrinks:string[]=data;
     this.alcoholicDrinks=tempDrinks;
   
    }, (error)=>{
      console.log(error);
    })
  }

  fetchNonAlcoholicDrinks(){
    this._cocktails.getAllNonAlcoholicDrinks().subscribe((data:any)=>{
      console.log(data);
      let tempDrinks:string[]=data;
     this.nonAlcoholicDrinks=tempDrinks;
    }, (error)=>{
      console.log(error);
    })
  }

  getAllDrinks(){
    this.cocktails = this.alcoholicDrinks.concat(this.nonAlcoholicDrinks);
 }

}
