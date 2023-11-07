import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaPersonalComponent } from './bodega-personal.component';

describe('BodegaPersonalComponent', () => {
  let component: BodegaPersonalComponent;
  let fixture: ComponentFixture<BodegaPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodegaPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
