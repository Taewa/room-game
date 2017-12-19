import { TestBed, inject } from '@angular/core/testing';

import { MyItemListModalService } from './my-item-list-modal.service';

describe('MyItemListModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyItemListModalService]
    });
  });

  it('should be created', inject([MyItemListModalService], (service: MyItemListModalService) => {
    expect(service).toBeTruthy();
  }));
});
