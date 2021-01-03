import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.TestComponent } from './add.test.component';

describe('Add.TestComponent', () => {
  let component: Add.TestComponent;
  let fixture: ComponentFixture<Add.TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
