import { TestBed } from '@angular/core/testing';

import { TalkWithDbServiceService } from './talk-with-db-service.service';

describe('TalkWithDbServiceService', () => {
  let service: TalkWithDbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalkWithDbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
