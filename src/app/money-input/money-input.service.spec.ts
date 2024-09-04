import { TestBed } from '@angular/core/testing';
import { MoneyInputService } from './money-input.service';
import { take } from 'rxjs/operators';

describe('MoneyInputService', () => {
  let service: MoneyInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyInputService);
    // Reset value to avoid interference from previous tests
    service.setMoneyValue('');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get money value correctly', () => {
    const testValue = '100k';
    service.setMoneyValue(testValue);
    expect(service.getMoneyValue()).toBe(testValue);
  });

  it('should call the subscription once when a new value is emitted', () => {
    const newValue = '250k';
    const spy = jasmine.createSpy('subscriptionSpy');

    // Subscribe to moneyValue$ and spy on the subscription
    service.moneyValue$.pipe(take(1)).subscribe(spy);

    // Set the value which should trigger the emission
    service.setMoneyValue(newValue);

    // Ensure that the subscription spy was called once
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
