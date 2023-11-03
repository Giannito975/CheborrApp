import { TestBed } from '@angular/core/testing';

import { CocktailAPIService } from './cocktail-api.service';

describe('CocktailAPIService', () => {
  let service: CocktailAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
