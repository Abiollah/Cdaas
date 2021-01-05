import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.TestgroupComponent } from './add.testgroup.component';

describe('Add.TestgroupComponent', () => {
  let component: Add.TestgroupComponent;
  let fixture: ComponentFixture<Add.TestgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.TestgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.TestgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
