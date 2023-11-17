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
removeCocktailToBodegaPersonal(arg0: any) {
throw new Error('Method not implemented.');
}
  public allCocktailsList: any = [];
  filterDrink = '';

  constructor(
    private CocktailAPIService: CocktailAPIService,
    private authService: AuthService,
    public usersApiService: UsersApiService,
    private readonly bodegaPersonalService: BodegaPersonalService
  ) {}

  ngOnInit(): void {
    this.loadDrinks();
  }

  loadDrinks(): void {
    
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

  negativeAddCocktailAlert(): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Trago removido de tu Bodega Personal',
    });
  }
}
