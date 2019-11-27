import { TestBed, async, inject } from '@angular/core/testing';

import { ProductDetailsGuard } from './product-details.guard';

describe('ProductDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailsGuard]
    });
  });

  it('should ...', inject([ProductDetailsGuard], (guard: ProductDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
