import { TestBed } from '@angular/core/testing';

import { ToggleService } from './open-nav.service';

describe('OpenNavService', () => {
  let service: ToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
