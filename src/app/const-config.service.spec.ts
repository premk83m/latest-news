import { TestBed } from '@angular/core/testing';

import { ConstConfigService } from './const-config.service';

describe('ConstConfigService', () => {
  let service: ConstConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
