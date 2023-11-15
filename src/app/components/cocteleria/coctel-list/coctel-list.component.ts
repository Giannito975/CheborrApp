import { Component, OnInit } from '@angular/core';
import { CocktailAPIService } from 'src/app/services/cocktail-api.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-coctel-list',
  templateUrl: './coctel-list.component.html',
  styleUrls: ['./coctel-list.component.css']
})
export class CoctelListComponent implements OnInit {

  //public alcoholicCoctailList:any = [];
  //public nonAlcoholicCoctailList:any = [];
  public allCocktailsList: any = [];
  filterDrink = '';

  constructor(private CocktailAPIService: CocktailAPIService) { }

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

  addCocktailToBodegaPersonal() {
    let loggedUser = true;
    
      //si esta logueado, puede agregar tragos a su bodega personal
    if (loggedUser) {
      //si el trago no está en su bodega personal, lo agregaría y damos la alerta que se agregó
      if (loggedUser) {
        this.positiveAddCocktailAlert();
      } else { ////si el trago ESTÁ en su bodega personal, le decimos q no puede agregarlo porque ya lo tiene
        this.negativeAddCocktailAlert();
      }
    }else{ //si NO está logueado, le decimos q para agregar tragos a su bodega personal se tiene que loguear
      Swal.fire({
        title: "<strong><u>¡ATENCION!</u></strong>",
        icon: "info",
        html: `
          Para agregar un trago a tu Bodega Personal necesitas estar logueado
        `,
        focusConfirm: false,
      });
    }
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
