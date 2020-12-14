import { TestBed } from '@angular/core/testing';

import { Manage.PharmaciesService } from './manage.pharmacies.service';

describe('Manage.PharmaciesService', () => {
  let service: Manage.PharmaciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Manage.PharmaciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
