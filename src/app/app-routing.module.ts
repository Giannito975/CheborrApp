import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { CocktailCarouselComponent } from './components/home/cocktail-carousel/cocktail-carousel.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { BodegaPersonalComponent } from './components/bodega-personal/bodega-personal.component';
import { CocteleriaComponent } from './components/cocteleria/cocteleria.component';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent,

  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'cocteleria',
    component: CocteleriaComponent
  },
  {
    path: 'bodega-personal',
    component: BodegaPersonalComponent
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
