import { TestBed } from '@angular/core/testing';

import { UserMatchService } from './user-match.service';

describe('UserMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMatchService = TestBed.get(UserMatchService);
    expect(service).toBeTruthy();
  });
});
