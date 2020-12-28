import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.CareentrypointComponent } from './add.careentrypoint.component';

describe('Add.CareentrypointComponent', () => {
  let component: Add.CareentrypointComponent;
  let fixture: ComponentFixture<Add.CareentrypointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.CareentrypointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.CareentrypointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
