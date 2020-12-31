import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.OccupationComponent } from './add.occupation.component';

describe('Add.OccupationComponent', () => {
  let component: Add.OccupationComponent;
  let fixture: ComponentFixture<Add.OccupationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.OccupationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.OccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
