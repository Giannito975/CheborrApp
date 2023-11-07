import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CocktailAPIService {

  URL:string="https://www.thecocktaildb.com";

 

  constructor(
     private http : HttpClient
  ) { }

  getAllAlcoholicDrinks(){
    return this.http.get(`${this.URL}/api/json/v1/1/filter.php?a=Alcoholic`).pipe(map((result:any)=>result.drinks));
  }

  getAllNonAlcoholicDrinks(){
    return this.http.get(`${this.URL}/api/json/v1/1/filter.php?a=Non_Alcoholic`).pipe(map((result:any)=>result.drinks));
  }

  getCocktailDetails(id:string){
    let params = new HttpParams();
    params=params.append('i', id);
    return this.http.get(`${this.URL}/api/json/v1/1/lookup.php?${params}`).pipe(map((result:any)=>result.drinks[0]));
  }

  searchCocktail(texto:string){
/* https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita */
    let params=new HttpParams();
    params=params.append('s', texto);
    return this.http.get(`${this.URL}/api/json/v1/1/search.php?${params}`).pipe(map((result:any)=>result.drinks));
  }

  
 
}
