import { TestBed, inject } from '@angular/core/testing';

import { TotalItemsService } from './total-items.service';

describe('TotalItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotalItemsService]
    });
  });

  it('should be created', inject([TotalItemsService], (service: TotalItemsService) => {
    expect(service).toBeTruthy();
  }));
});
