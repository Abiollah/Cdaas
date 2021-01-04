import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.AllergensComponent } from './add.allergens.component';

describe('Add.AllergensComponent', () => {
  let component: Add.AllergensComponent;
  let fixture: ComponentFixture<Add.AllergensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.AllergensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.AllergensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
