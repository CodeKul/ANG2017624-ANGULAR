import { TestBed, inject } from '@angular/core/testing';

import { HeavyService } from './heavy.service';

describe('HeavyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeavyService]
    });
  });

  it('should ...', inject([HeavyService], (service: HeavyService) => {
    expect(service).toBeTruthy();
  }));
});
