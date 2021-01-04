import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTesttypeComponent } from './add-testtype.component';

describe('AddTesttypeComponent', () => {
  let component: AddTesttypeComponent;
  let fixture: ComponentFixture<AddTesttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTesttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTesttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
