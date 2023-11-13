import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';


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
import { CocteleriaComponent } from './components/cocteleria/cocteleria.component';
import { CoctelListComponent } from './components/cocteleria/coctel-list/coctel-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CocteleriaComponent,
    CoctelListComponent,
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
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
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
