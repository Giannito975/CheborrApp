import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctelListComponent } from './coctel-list.component';

describe('CoctelListComponent', () => {
  let component: CoctelListComponent;
  let fixture: ComponentFixture<CoctelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoctelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
