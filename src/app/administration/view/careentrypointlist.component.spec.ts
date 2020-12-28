import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareentrypointlistComponent } from './careentrypointlist.component';

describe('CareentrypointlistComponent', () => {
  let component: CareentrypointlistComponent;
  let fixture: ComponentFixture<CareentrypointlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareentrypointlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareentrypointlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
