import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MoneyInputService } from './money-input.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-money-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './money-input.component.html',
  styleUrl: './money-input.component.scss',
})
export class MoneyInputComponent implements OnInit, OnDestroy {
  inputControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d*\.?\d*(k|m|b|t)?$/i),
  ]);
  moneyValue = '';
  private destroy$ = new Subject<void>();
  constructor(private moneyInputService: MoneyInputService) {}

  ngOnInit(): void {
    this.inputControl.setValue(this.moneyInputService.getMoneyValue());

    this.moneyInputService.moneyValue$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.moneyValue = value;
      });

    this.inputControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((newValue) => {
        this.moneyInputService.setMoneyValue(newValue || '');
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
