import { TestBed } from '@angular/core/testing';

import { OpenNavService } from './open-nav.service';

describe('OpenNavService', () => {
  let service: OpenNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
