import { TestBed } from '@angular/core/testing';

import { ExpProductService } from './exp-product.service';

describe('ExpProductService', () => {
  let service: ExpProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
