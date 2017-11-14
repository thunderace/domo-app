import { TestBed, inject } from '@angular/core/testing';

import { DomoService } from './domo.service';

describe('DomoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomoService]
    });
  });

  it('should be created', inject([DomoService], (service: DomoService) => {
    expect(service).toBeTruthy();
  }));
});
