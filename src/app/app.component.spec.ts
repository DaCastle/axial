import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [];

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterModule.forRoot(routes),
        MatToolbarModule,
        MatButtonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the toolbar with the correct text', () => {
    const toolbarElement = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(toolbarElement).toBeTruthy();
    expect(toolbarElement.nativeElement.textContent).toContain('Axial');
  });

  it('should render the Home button with correct routerLink', () => {
    const homeButton = fixture.debugElement.query(
      By.css('button[routerLink="/"]')
    );
    expect(homeButton).toBeTruthy();
    expect(homeButton.nativeElement.textContent).toContain('Home');
  });

  it('should render the Results button with correct routerLink', () => {
    const resultsButton = fixture.debugElement.query(
      By.css('button[routerLink="/results"]')
    );
    expect(resultsButton).toBeTruthy();
    expect(resultsButton.nativeElement.textContent).toContain('Results');
  });

  it('should have a router outlet in the template', () => {
    const routerOutlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(routerOutlet).toBeTruthy();
  });
});
