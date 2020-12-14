import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPortalListComponent } from './client.portal.list.component';

describe('ClientPortalListComponent', () => {
  let component: ClientPortalListComponent;
  let fixture: ComponentFixture<ClientPortalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPortalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPortalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
