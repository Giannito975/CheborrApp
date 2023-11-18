import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, map } from 'rxjs';
import { BodegaPersonal, User } from './models';
import { IBodegaPersonal } from './interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BodegaPersonalService {
  public baseURL: string = 'http://localhost:3000/bodega-personal';

  //a esto hay que concatenarle el ID del trago
  public getCocktailByIdFromAPI = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  //private bodegaPersonal: BodegaPersonal | undefined;

  constructor(private http: HttpClient, private authService: AuthService) { }

  public addCocktailToBodegaPersonal(
    bodegaPersonal: IBodegaPersonal
  ): Observable<IBodegaPersonal> {
    return this.http.post<IBodegaPersonal>(`${this.baseURL}`, bodegaPersonal);
  }

  public tragoYaExisteEnBodegaPersonal(
    bodegaPersonal: IBodegaPersonal
  ): Observable<boolean> {
    return this.getCocktails().pipe(
      map((cocktails) =>
        cocktails.some((item) => item.drinkId === bodegaPersonal.drinkId)
      )
    );
  }

  //SEGUNDO PASO  Get all de todos los cocktails de la bodega personal de un usuario
  public getCocktails(): Observable<IBodegaPersonal[]> {
    return this.http.get<IBodegaPersonal[]>(`${this.baseURL}`);
  }

  //PRIMER PASO me traigo todos los objetos de bodega personal y los filtro por el userId del usuario logueado, falta hacer la logica
  public getCocktailsFromUser(userId: string): Observable<IBodegaPersonal[]> {
    return this.getCocktails().pipe(
      map((cocktails) => cocktails.filter((item) => item.userId === userId))
    );
  }


  public deleteBodegaPersonal(id: string) {
    return this.http.delete(this.baseURL+"/"+id);
  }





}