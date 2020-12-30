import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.RefferedfromComponent } from './add.refferedfrom.component';

describe('Add.RefferedfromComponent', () => {
  let component: Add.RefferedfromComponent;
  let fixture: ComponentFixture<Add.RefferedfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.RefferedfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.RefferedfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
