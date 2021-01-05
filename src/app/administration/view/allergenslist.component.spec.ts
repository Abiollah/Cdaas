import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergenslistComponent } from './allergenslist.component';

describe('AllergenslistComponent', () => {
  let component: AllergenslistComponent;
  let fixture: ComponentFixture<AllergenslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergenslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergenslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
