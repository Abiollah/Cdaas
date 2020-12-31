import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.PregnancyComponent } from './add.pregnancy.component';

describe('Add.PregnancyComponent', () => {
  let component: Add.PregnancyComponent;
  let fixture: ComponentFixture<Add.PregnancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.PregnancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.PregnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
