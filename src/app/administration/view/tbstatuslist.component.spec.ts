import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbstatuslistComponent } from './tbstatuslist.component';

describe('TbstatuslistComponent', () => {
  let component: TbstatuslistComponent;
  let fixture: ComponentFixture<TbstatuslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbstatuslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbstatuslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
