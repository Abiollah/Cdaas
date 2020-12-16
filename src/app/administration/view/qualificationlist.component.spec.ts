import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationlistComponent } from './qualificationlist.component';

describe('QualificationlistComponent', () => {
  let component: QualificationlistComponent;
  let fixture: ComponentFixture<QualificationlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
