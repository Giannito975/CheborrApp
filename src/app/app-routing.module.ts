import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { CocktailCarouselComponent } from './components/cocktail-carousel/cocktail-carousel.component';
import { RegisterComponent } from './components/register/register.component';

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
    component: HomepagesComponent
  },
  {
    path: 'bebidas',
    component: CocktailCarouselComponent,  
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
