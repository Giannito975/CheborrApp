import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { BodegaPersonalComponent } from './components/bodega-personal/bodega-personal.component';
import { CocteleriaComponent } from './components/cocteleria/cocteleria.component';
import { Error404Component } from './components/error404/error404.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path:'bodega',
    loadChildren:() => import('./services/cocktail-api.service').then(m => m.CocktailAPIService)
  },
  {
    path: 'home', 
    component: HomeComponent    
  },
  {
    path: 'login', 
    component: LoginComponent,

  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path : 'forgot-password',
    component : ForgotPasswordComponent
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
