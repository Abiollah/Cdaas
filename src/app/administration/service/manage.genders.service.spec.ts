import { TestBed } from '@angular/core/testing';

import { Manage.GendersService } from './manage.genders.service';

describe('Manage.GendersService', () => {
  let service: Manage.GendersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Manage.GendersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
