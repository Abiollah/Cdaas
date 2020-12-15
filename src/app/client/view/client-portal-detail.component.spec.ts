import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPortalDetailComponent } from './client-portal-detail.component';

describe('ClientPortalDetailComponent', () => {
  let component: ClientPortalDetailComponent;
  let fixture: ComponentFixture<ClientPortalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPortalDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPortalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
