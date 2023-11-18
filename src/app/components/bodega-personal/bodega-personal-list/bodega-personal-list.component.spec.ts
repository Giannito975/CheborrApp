import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaPersonalListComponent } from './bodega-personal-list.component';

describe('BodegaPersonalListComponent', () => {
  let component: BodegaPersonalListComponent;
  let fixture: ComponentFixture<BodegaPersonalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodegaPersonalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegaPersonalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
