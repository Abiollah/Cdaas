import { TestBed } from '@angular/core/testing';

import { Manage.TargetgroupService } from './manage.targetgroup.service';

describe('Manage.TargetgroupService', () => {
  let service: Manage.TargetgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Manage.TargetgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
