import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.StatusComponent } from './add.status.component';

describe('Add.StatusComponent', () => {
  let component: Add.StatusComponent;
  let fixture: ComponentFixture<Add.StatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.StatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
