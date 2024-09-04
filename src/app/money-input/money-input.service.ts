import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoneyInputService {
  private moneyValueSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  public moneyValue$: Observable<string> =
    this.moneyValueSubject.asObservable();

  constructor() {}

  setMoneyValue(newValue: string): void {
    this.moneyValueSubject.next(newValue);
  }

  getMoneyValue(): string {
    return this.moneyValueSubject.getValue();
  }
}
