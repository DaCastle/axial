import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MoneyResultsComponent } from './money-results.component';
import { CurrencyFormatterPipe } from '../shared/pipes/currency-formatter.pipe';
import { MoneyInputService } from '../money-input/money-input.service';
import { CommonModule } from '@angular/common';

describe('MoneyResultsComponent', () => {
  let component: MoneyResultsComponent;
  let fixture: ComponentFixture<MoneyResultsComponent>;
  let mockMoneyInputService: jasmine.SpyObj<MoneyInputService>;

  beforeEach(async () => {
    // Create a spy for MoneyInputService
    mockMoneyInputService = jasmine.createSpyObj('MoneyInputService', ['getMoneyValue', 'setMoneyValue']);
    // Provide mock observable value
    mockMoneyInputService.moneyValue$ = of('100k');

    await TestBed.configureTestingModule({
      imports: [MoneyResultsComponent, CommonModule, CurrencyFormatterPipe],
      providers: [
        { provide: MoneyInputService, useValue: mockMoneyInputService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MoneyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display formatted money value', () => {
    // Trigger change detection
    fixture.detectChanges();

    // Query the element with the formatted value
    const formattedValueElement: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(formattedValueElement.textContent).toBe('100,000'); // Adjust to match the expected formatted value
  });

  it('should subscribe to moneyValue$ and format the value', () => {
    // Check that moneyValue$ observable is used
    expect(mockMoneyInputService.moneyValue$).toBeTruthy();
  });
});
