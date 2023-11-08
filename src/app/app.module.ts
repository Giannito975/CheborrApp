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
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { BodegaPersonalComponent } from './components/bodega-personal/bodega-personal.component';



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
  ],
  exports:[
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
