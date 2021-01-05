import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.TbstatusComponent } from './add.tbstatus.component';

describe('Add.TbstatusComponent', () => {
  let component: Add.TbstatusComponent;
  let fixture: ComponentFixture<Add.TbstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.TbstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.TbstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
