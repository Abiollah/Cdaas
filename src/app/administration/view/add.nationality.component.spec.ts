import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.NationalityComponent } from './add.nationality.component';

describe('Add.NationalityComponent', () => {
  let component: Add.NationalityComponent;
  let fixture: ComponentFixture<Add.NationalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.NationalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.NationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
