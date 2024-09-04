import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyResultsComponent } from './money-results.component';

describe('MoneyResultsComponent', () => {
  let component: MoneyResultsComponent;
  let fixture: ComponentFixture<MoneyResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
