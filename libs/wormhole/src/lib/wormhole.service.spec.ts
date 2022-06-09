import {TestBed} from '@angular/core/testing';

import {WormholeService} from './wormhole.service';

describe('WormholeService', () => {
  let service: WormholeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WormholeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
