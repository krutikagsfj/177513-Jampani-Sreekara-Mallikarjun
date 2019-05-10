import { TestBed } from '@angular/core/testing';

import { OnlineGamesService } from './online-games.service';

describe('OnlineGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineGamesService = TestBed.get(OnlineGamesService);
    expect(service).toBeTruthy();
  });
});
