import { TestBed } from '@angular/core/testing';

import { Manage.Status.StyleService } from './manage.status.style.service';

describe('Manage.Status.StyleService', () => {
  let service: Manage.Status.StyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Manage.Status.StyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
