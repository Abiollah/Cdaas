import { TestBed } from '@angular/core/testing';

import { Manage.ReligionService } from './manage.religion.service';

describe('Manage.ReligionService', () => {
  let service: Manage.ReligionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Manage.ReligionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
