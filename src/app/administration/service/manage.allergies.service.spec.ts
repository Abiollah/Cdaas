import { TestBed } from '@angular/core/testing';

import { Manage.AllergiesService } from './manage.allergies.service';

describe('Manage.AllergiesService', () => {
  let service: Manage.AllergiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Manage.AllergiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
