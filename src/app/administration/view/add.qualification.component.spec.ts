import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.QualificationComponent } from './add.qualification.component';

describe('Add.QualificationComponent', () => {
  let component: Add.QualificationComponent;
  let fixture: ComponentFixture<Add.QualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.QualificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.QualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
