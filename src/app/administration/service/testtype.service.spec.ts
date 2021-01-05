import { TestBed } from '@angular/core/testing';

import { TesttypeService } from './testtype.service';

describe('TesttypeService', () => {
  let service: TesttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesttypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
