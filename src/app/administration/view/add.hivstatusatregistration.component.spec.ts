import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.HivstatusatregistrationComponent } from './add.hivstatusatregistration.component';

describe('Add.HivstatusatregistrationComponent', () => {
  let component: Add.HivstatusatregistrationComponent;
  let fixture: ComponentFixture<Add.HivstatusatregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.HivstatusatregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.HivstatusatregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
