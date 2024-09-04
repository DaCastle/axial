import { Component } from '@angular/core';
import { MoneyInputService } from '../money-input/money-input.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CurrencyFormatterPipe } from '../shared/pipes/currency-formatter.pipe';

@Component({
  selector: 'app-money-results',
  standalone: true,
  imports: [CommonModule, CurrencyFormatterPipe],
  templateUrl: './money-results.component.html',
  styleUrl: './money-results.component.scss',
})
export class MoneyResultsComponent {
  public moneyValue$: Observable<string>;
  constructor(private moneyInputService: MoneyInputService) {
    this.moneyValue$ = this.moneyInputService.moneyValue$;
  }
}
