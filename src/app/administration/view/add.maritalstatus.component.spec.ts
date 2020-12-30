import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.MaritalstatusComponent } from './add.maritalstatus.component';

describe('Add.MaritalstatusComponent', () => {
  let component: Add.MaritalstatusComponent;
  let fixture: ComponentFixture<Add.MaritalstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.MaritalstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.MaritalstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
