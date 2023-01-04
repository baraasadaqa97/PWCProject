import { TestBed } from '@angular/core/testing';

import { ApisMapsService } from './apis-maps.service';

describe('ApisMapsService', () => {
  let service: ApisMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
