import { Component, OnInit } from '@angular/core';
import { CocktailAPIService } from 'src/app/services/cocktail-api.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';
import { BodegaPersonalService } from 'src/app/services/bodega-personal-api.service';
import { BodegaPersonal, User } from 'src/app/services/models';
import { AuthService } from 'src/app/services/auth.service';
import { UsersApiService } from 'src/app/services/users-api.service';


@Component({
  selector: 'app-coctel-list',
  templateUrl: './coctel-list.component.html',
  styleUrls: ['./coctel-list.component.css']
})
export class CoctelListComponent implements OnInit {

  //public alcoholicCoctailList:any = [];
  //public nonAlcoholicCoctailList:any = [];
  bodegaPersonalService : BodegaPersonalService | undefined;

  public allCocktailsList: any = [];
  filterDrink = '';

  constructor(private CocktailAPIService: CocktailAPIService, private authService: AuthService, public usersApiService: UsersApiService) { }

  ngOnInit(): void {
    this.loadAlcoholicDrinks();
    this.loadNonAlcoholicDrinks();
  }

  loadAlcoholicDrinks() {
    this.CocktailAPIService.getAllAlcoholicDrinks()
      .subscribe(respuesta => {
        this.allCocktailsList = respuesta;
      })
  }

  loadNonAlcoholicDrinks() {
    this.CocktailAPIService.getAllNonAlcoholicDrinks()
      .subscribe(respuesta => {
        this.allCocktailsList = respuesta;
      })
  }

  /*addCocktailToBodegaPersonal(idDrink : any) {  *********************          INTENTO 1 NO FUNCIONA
    let loggedUser = this.authService.getUserFromLocalStorage();
    const bodegaPersonalNueva = new BodegaPersonal();
    bodegaPersonalNueva.userId = loggedUser?.id;
    bodegaPersonalNueva.drinkId = idDrink;
    if (loggedUser != null) {
      //si el trago no está en su bodega personal, lo agregaría y damos la alerta que se agregó
      if (loggedUser) {
        
        //aca tendria que agregar la validacion para verificar si el trago ya existe en la bodega personal del usuario
        
        this.bodegaPersonalService?.addCocktailToBodegaPersonal(bodegaPersonalNueva)
        this.positiveAddCocktailAlert();
      } else { ////si el trago ESTÁ en su bodega personal, le decimos q no puede agregarlo porque ya lo tiene
        this.negativeAddCocktailAlert();
      }
    }else{ //si NO está logueado, le decimos q para agregar tragos a su bodega personal se tiene que loguear
      this.pleaseLogInAlert;
    }
  }*/

  /*addCocktailToBodegaPersonal(idDrink: any) { ********************** INTENTO 2 TAMPOCO FUNCIONA
    const loggedUser = this.authService.getUserFromLocalStorage();
  
    if (loggedUser) {
      const bodegaPersonalNueva = new BodegaPersonal();
      bodegaPersonalNueva.userId = loggedUser.id;
      bodegaPersonalNueva.drinkId = idDrink;
  
      // Verificar si el trago ya existe en la bodega personal del usuario
      const tragoYaExiste = this.bodegaPersonalService?.tragoYaExisteEnBodegaPersonal(idDrink);
  
      if (!tragoYaExiste) {
        // Si el trago no está en su bodega personal, lo agregaría y damos la alerta que se agregó
        this.bodegaPersonalService?.addCocktailToBodegaPersonal(bodegaPersonalNueva);
        this.positiveAddCocktailAlert();
      } else {
        // Si el trago YA está en su bodega personal, le decimos que no puede agregarlo porque ya lo tiene
        this.negativeAddCocktailAlert();
      }
    } else {
      // Si NO está logueado, le decimos que para agregar tragos a su bodega personal se tiene que loguear
      this.pleaseLogInAlert();
    }
  }*/

  public async addCocktailToBodegaPersonal(idDrink: any): Promise<void> {
   
      const loggedUser = this.authService.getUserFromLocalStorage();
  
      if (!loggedUser) {
        // Si NO está logueado, le decimos que para agregar tragos a su bodega personal se tiene que loguear
        this.pleaseLogInAlert();
        return;
      }else{
        const bodegaPersonalNueva = new BodegaPersonal();
      bodegaPersonalNueva.userId = loggedUser.id;
      bodegaPersonalNueva.drinkId = idDrink;
        
      // Verifica si el trago ya existe en la bodega personal del usuario
      const tragoYaExiste = await this.bodegaPersonalService?.tragoYaExisteEnBodegaPersonal(bodegaPersonalNueva);
  
      if (!tragoYaExiste) {
        // Si el trago no está en su bodega personal, lo agregaría y damos la alerta que se agregó
        await this.bodegaPersonalService?.addCocktailToBodegaPersonal(bodegaPersonalNueva);
        this.positiveAddCocktailAlert();
      } else {
        // Si el trago YA está en su bodega personal, le decimos que no puede agregarlo porque ya lo tiene
        this.negativeAddCocktailAlert();
      }
      }
  }
  
  

  pleaseLogInAlert() : void {
    Swal.fire({
      title: "<strong><u>¡ATENCION!</u></strong>",
      icon: "info",
      html: `
        Para agregar un trago a tu Bodega Personal necesitas estar logueado
      `,
      focusConfirm: false,
    });
  }

  positiveAddCocktailAlert(): void {
    Swal.fire({
      icon: "success",
      title: "Trago agregado a tu Bodega Personal",
      showConfirmButton: false,
      timer: 2000
    });
  }

  negativeAddCocktailAlert(): void {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El trago ya pertenece a tu Bodega Personal"
    });
  }

}
