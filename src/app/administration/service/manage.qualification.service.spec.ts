import { TestBed } from '@angular/core/testing';

import { Manage.QualificationService } from './manage.qualification.service';

describe('Manage.QualificationService', () => {
  let service: Manage.QualificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Manage.QualificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
