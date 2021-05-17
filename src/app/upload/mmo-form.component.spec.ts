import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmoFormComponent } from './mmo-form.component';

describe('MmoFormComponent', () => {
  let component: MmoFormComponent;
  let fixture: ComponentFixture<MmoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
