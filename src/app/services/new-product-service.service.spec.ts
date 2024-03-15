import { TestBed } from '@angular/core/testing';

import { NewProductServiceService } from './new-product-service.service';

describe('NewProductServiceService', () => {
  let service: NewProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
