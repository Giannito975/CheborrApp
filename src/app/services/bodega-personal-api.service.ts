import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, map } from 'rxjs';
import { BodegaPersonal, User } from './models';

@Injectable({
  providedIn: 'root'
})
export class BodegaPersonalService {

  public baseURL: string = "http://localhost:3000/bodega_personal";


  private bodegaPersonal: BodegaPersonal | undefined;

  constructor(private http: HttpClient) { }

  public addCocktailToBodegaPersonal(bodegaPersonal: BodegaPersonal): Observable<BodegaPersonal> {
    return this.http.post<BodegaPersonal>(`${this.baseURL}`, bodegaPersonal)

  }

  public tragoYaExisteEnBodegaPersonal(bodegaPersonal : BodegaPersonal): Observable<boolean>{
    return this.getCocktails().pipe(
      map(cocktails => cocktails.some(item => item.drinkId === bodegaPersonal.drinkId))
    );
  }

  //Get all de todos los cocktails de la bodega personal de un usuario
  public getCocktails(): Observable<BodegaPersonal[]> {
    return this.http.get<BodegaPersonal[]>(`${this.baseURL}`);
  } 

  

  //me traigo todos los objetos de bodega personal y los filtro por el userId del usuario logueado, falta hacer la logica
  public getCocktailsFromUser(userId: string): Observable<BodegaPersonal[]> {
    return this.getCocktails().pipe(
      map(cocktails => cocktails.filter(item => item.userId === userId))
    );
  }


}