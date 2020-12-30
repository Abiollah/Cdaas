import { TestBed } from '@angular/core/testing';

import { Manage.MaritalstatusService } from './manage.maritalstatus.service';

describe('Manage.MaritalstatusService', () => {
  let service: Manage.MaritalstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Manage.MaritalstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
