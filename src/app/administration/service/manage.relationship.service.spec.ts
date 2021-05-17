import { TestBed } from '@angular/core/testing';

import { Manage.RelationshipService } from './manage.relationship.service';

describe('Manage.RelationshipService', () => {
  let service: Manage.RelationshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Manage.RelationshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
