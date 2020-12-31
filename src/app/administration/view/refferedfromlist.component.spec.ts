import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferedfromlistComponent } from './refferedfromlist.component';

describe('RefferedfromlistComponent', () => {
  let component: RefferedfromlistComponent;
  let fixture: ComponentFixture<RefferedfromlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefferedfromlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferedfromlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
