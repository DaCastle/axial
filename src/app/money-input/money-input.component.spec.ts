import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoneyInputComponent } from './money-input.component';
import { MoneyInputService } from './money-input.service';
import { Subject } from 'rxjs';

describe('MoneyInputComponent', () => {
  let component: MoneyInputComponent;
  let fixture: ComponentFixture<MoneyInputComponent>;
  let mockMoneyInputService: jasmine.SpyObj<MoneyInputService>;
  let moneyValueSubject: Subject<string>; // Subject to control observable values

  beforeEach(async () => {
    // Create a Subject for moneyValue$
    moneyValueSubject = new Subject<string>();

    // Create a spy object for MoneyInputService
    mockMoneyInputService = jasmine.createSpyObj('MoneyInputService', ['getMoneyValue', 'setMoneyValue']);
    
    // Set up the moneyValue$ property to return the Subject's observable
    mockMoneyInputService.moneyValue$ = moneyValueSubject.asObservable();

    // Set up the return value for getMoneyValue
    mockMoneyInputService.getMoneyValue.and.returnValue('100k');

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,  // Add this module
        MoneyInputComponent
      ],
      providers: [
        { provide: MoneyInputService, useValue: mockMoneyInputService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MoneyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form control with value from MoneyInputService', () => {
    expect(component.inputControl.value).toBe('100k');
  });

  it('should update moneyValue when MoneyInputService moneyValue$ changes', () => {
    // Simulate a change in the moneyValue$ observable
    moneyValueSubject.next('200k');
    fixture.detectChanges();
    expect(component.moneyValue).toBe('200k');
  });

  it('should call MoneyInputService.setMoneyValue when inputControl value changes', () => {
    const newValue = '250k';
    component.inputControl.setValue(newValue);
    fixture.detectChanges();
    expect(mockMoneyInputService.setMoneyValue).toHaveBeenCalledWith(newValue);
  });

  it('should display error messages for invalid input', () => {
    // Get the input element and set an invalid value
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'invalid'; // Set an invalid value
    inputElement.dispatchEvent(new Event('input')); // Dispatch input event
    fixture.detectChanges(); // Trigger change detection
  
    // Check that the mat-error elements are present and display the correct messages
    const errorMessages = fixture.nativeElement.querySelectorAll('mat-error');
    expect(errorMessages.length).toBeGreaterThan(0); // Ensure at least one error message is displayed
    
    // Check for specific error messages if needed
    expect(errorMessages[0].textContent).toContain('Invalid currency format');
  });
  
});
