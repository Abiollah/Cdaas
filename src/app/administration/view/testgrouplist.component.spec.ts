import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestgrouplistComponent } from './testgrouplist.component';

describe('TestgrouplistComponent', () => {
  let component: TestgrouplistComponent;
  let fixture: ComponentFixture<TestgrouplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestgrouplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestgrouplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
