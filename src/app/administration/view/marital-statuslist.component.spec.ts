import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalStatuslistComponent } from './marital-statuslist.component';

describe('MaritalStatuslistComponent', () => {
  let component: MaritalStatuslistComponent;
  let fixture: ComponentFixture<MaritalStatuslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaritalStatuslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritalStatuslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
