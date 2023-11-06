import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocteleriaComponent } from './cocteleria.component';

describe('CocteleriaComponent', () => {
  let component: CocteleriaComponent;
  let fixture: ComponentFixture<CocteleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocteleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocteleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
