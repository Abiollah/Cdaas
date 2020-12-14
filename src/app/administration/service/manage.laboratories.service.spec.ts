import { TestBed } from '@angular/core/testing';

import { Manage.LaboratoriesService } from './manage.laboratories.service';

describe('Manage.LaboratoriesService', () => {
  let service: Manage.LaboratoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Manage.LaboratoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
