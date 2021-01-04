import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttypelistComponent } from './testtypelist.component';

describe('TesttypelistComponent', () => {
  let component: TesttypelistComponent;
  let fixture: ComponentFixture<TesttypelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesttypelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttypelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
