import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { BodegaPersonal, User } from './models';

@Injectable({
  providedIn: 'root'
})
export class BodegaPersonalService{

  public baseURL: string = "http://localhost:3000/bodega_personal";

  private bodegaPersonal: BodegaPersonal | undefined;

  constructor(private http: HttpClient) { }

  public addCocktailToBodegaPersonal(bodegaPersonal : BodegaPersonal): Observable<BodegaPersonal>{
    return this.http.post<BodegaPersonal>(`${this.baseURL}`, bodegaPersonal) 
    
}

//Get all de todos los cocktails de la bodega personal de un usuario
public getCocktails(): Observable<BodegaPersonal[]> {
  return this.http.get<BodegaPersonal[]>(`${this.baseURL}`);
}

public getCocktailsFromUser(userId: string){

}




}