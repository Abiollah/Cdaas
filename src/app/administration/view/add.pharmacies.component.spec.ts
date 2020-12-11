import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.PharmaciesComponent } from './add.pharmacies.component';

describe('Add.PharmaciesComponent', () => {
  let component: Add.PharmaciesComponent;
  let fixture: ComponentFixture<Add.PharmaciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.PharmaciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.PharmaciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
