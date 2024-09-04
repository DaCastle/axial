import { TestBed } from '@angular/core/testing';

import { MoneyInputService } from './money-input.service';

describe('MoneyInputService', () => {
  let service: MoneyInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
