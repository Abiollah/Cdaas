import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatustypeComponent } from './add-statustype.component';

describe('AddStatustypeComponent', () => {
  let component: AddStatustypeComponent;
  let fixture: ComponentFixture<AddStatustypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStatustypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStatustypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
