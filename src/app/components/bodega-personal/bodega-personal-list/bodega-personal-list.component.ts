import { Component, OnInit } from '@angular/core';
import { CocktailAPIService } from 'src/app/services/cocktail-api.service';
import Swal from 'sweetalert2';
import { BodegaPersonalService } from 'src/app/services/bodega-personal-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsersApiService } from 'src/app/services/users-api.service';
import { IBodegaPersonal } from 'src/app/services/interface';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-bodega-personal-list',
  templateUrl: './bodega-personal-list.component.html',
  styleUrls: ['./bodega-personal-list.component.css'],
})
export class BodegaPersonalListComponent implements OnInit {

  public myCocktails: IBodegaPersonal[] = [];
  filterDrink = '';

  constructor(
    private CocktailAPIService: CocktailAPIService,
    private authService: AuthService,
    public usersApiService: UsersApiService,
    private readonly bodegaPersonalService: BodegaPersonalService
  ) { }

  ngOnInit(): void {
    this.loadCocktailsForUser();
  }

  removeCocktailToBodegaPersonal(arg0: any) {
    this.bodegaPersonalService.deleteBodegaPersonal(arg0).subscribe(()=>{
      this.positiveDeleteCocktailAlert();
      this.ngOnInit();
    })
    
  }

  public loadCocktailsForUser(): void {
    const loggedUser = this.authService.getUserFromLocalStorage();
    console.log(loggedUser);
    if (loggedUser) {
      this.bodegaPersonalService.getCocktailsFromUser(loggedUser?.id)
        .subscribe(
          cocktails => {
            this.myCocktails = cocktails;
            console.log("entra?");
            console.log(this.myCocktails);

          },
          error => {
            console.error('Error loading cocktails:', error);
          }
        );
    }

  }


  pleaseLogInAlert(): void {
    Swal.fire({
      title: '<strong><u>¡ATENCION!</u></strong>',
      icon: 'info',
      html: `
        Para agregar un trago a tu Bodega Personal necesitas estar logueado
      `,
      focusConfirm: false,
    });
  }

  positiveDeleteCocktailAlert(): void {
    Swal.fire({
      icon: 'success',
      title: 'Adios...',
      text: 'Trago removido de tu Bodega Personal',
    });
  }
}
