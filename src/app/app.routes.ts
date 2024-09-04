import { Routes } from '@angular/router';
import { MoneyInputComponent } from './money-input/money-input.component';
import { MoneyResultsComponent } from './money-results/money-results.component';

export const routes: Routes = [
  { path: '', component: MoneyInputComponent },
  { path: 'results', component: MoneyResultsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
