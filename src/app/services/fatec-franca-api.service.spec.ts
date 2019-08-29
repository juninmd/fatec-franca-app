import { TestBed } from '@angular/core/testing';

import { FatecFrancaApiService } from './fatec-franca-api.service';

describe('FatecFrancaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FatecFrancaApiService = TestBed.get(FatecFrancaApiService);
    expect(service).toBeTruthy();
  });
});
