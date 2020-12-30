import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.LaboratoriesComponent } from './add.laboratories.component';

describe('Add.LaboratoriesComponent', () => {
  let component: Add.LaboratoriesComponent;
  let fixture: ComponentFixture<Add.LaboratoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.LaboratoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.LaboratoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
