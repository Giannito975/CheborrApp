import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CocktailCarouselComponent } from './components/home/cocktail-carousel/cocktail-carousel.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { BodegaPersonalComponent } from './components/bodega-personal/bodega-personal.component';
import { HeroComponent } from './components/hero/hero.component';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CocktailCarouselComponent,
    DrinkCardComponent,
    NavbarComponent,
    FooterComponent,
    Error404Component,
    LoginComponent,
    RegisterComponent,
    BodegaPersonalComponent,
    HeroComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    MatSnackBarModule
  ],
  exports:[
    HomeComponent,
    Error404Component,
    FooterComponent,
    NavbarComponent,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
