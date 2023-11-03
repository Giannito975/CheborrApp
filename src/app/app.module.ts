import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CocktailCarouselComponent } from './components/cocktail-carousel/cocktail-carousel.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CocktailCarouselComponent,
    DrinkCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
