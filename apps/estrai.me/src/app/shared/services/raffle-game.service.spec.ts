import { TestBed } from '@angular/core/testing';

import { RaffleGameService } from './raffe-game.service';

describe('PlayersService', () => {
  let service: RaffleGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaffleGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
