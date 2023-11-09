import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { BodegaPersonalComponent } from './components/bodega-personal/bodega-personal.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
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
