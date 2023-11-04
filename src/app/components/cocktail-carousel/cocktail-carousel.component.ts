import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-carousel',
  templateUrl: './cocktail-carousel.component.html',
  styleUrls: ['./cocktail-carousel.component.css']
})
export class CocktailCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cards = [
    { title: 'Tarjeta 1', content: 'Contenido de la Tarjeta 1' },
    { title: 'Tarjeta 2', content: 'Contenido de la Tarjeta 2' },
    { title: 'Tarjeta 3', content: 'Contenido de la Tarjeta 3' },
    // Agrega más tarjetas según sea necesario
  ];

}
