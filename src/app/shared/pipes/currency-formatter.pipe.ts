import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter',
  standalone: true,
})
export class CurrencyFormatterPipe implements PipeTransform {
  transform(value: string | number): string {
    if (value == null || value === '') return '';

    let normalizedValue = this.normalizeMoneyInput(value.toString());
    return this.formatMoneyWithCommas(normalizedValue);
  }

  private normalizeMoneyInput(value: string): number {
    let normalizedValue = value.toLowerCase();

    normalizedValue = normalizedValue.replace(/,/g, '');

    const match = normalizedValue.match(/^(\d*\.?\d+)([kmbt])?$/);

    if (match) {
      const numericPart = parseFloat(match[1]);
      const suffix = match[2];

      switch (suffix) {
        case 'k':
          return numericPart * 1_000;
        case 'm':
          return numericPart * 1_000_000;
        case 'b':
          return numericPart * 1_000_000_000;
        case 't':
          return numericPart * 1_000_000_000_000;
        default:
          return numericPart;
      }
    }

    return Number(normalizedValue);
  }

  private formatMoneyWithCommas(value: number): string {
    return value.toLocaleString();
  }
}
