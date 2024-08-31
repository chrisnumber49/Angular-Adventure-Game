import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionViewComponent } from './selection-view.component';
import { StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../+state/routeSelect.reducer';
import { Router } from '@angular/router';
import { QuestionMapActions } from '../../+state/routeSelect.actions';
import { MatIconModule } from '@angular/material/icon';
import { getCurrentQuestion } from '../../+state/routeSelect.selector';


describe('SelectionViewComponent', () => {
  let component: SelectionViewComponent;
  let fixture: ComponentFixture<SelectionViewComponent>;
  let store: MockStore;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionViewComponent],
      imports: [
        MatIconModule,
        StoreModule.forRoot({})
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionViewComponent);
    component = fixture.componentInstance;
    component.questionText = 'test';
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the currentQuestion state and set the questionText, questionEnd and isRootQuestion when component set up', () => {
    store.overrideSelector(getCurrentQuestion, initialState.currentNode);
    fixture = TestBed.createComponent(SelectionViewComponent);
    component = fixture.componentInstance;

    expect(component.questionText).toEqual('Do you want a doughnut?');
    expect(component.questionEnd).toEqual(false);
    expect(component.isRootQuestion).toEqual(true);
  });

  it('should display answer button when the questions is still remain', () => {
    component.questionEnd = false;
    fixture.detectChanges();
    const yesBtn = fixture.debugElement.query(By.css('#yes-btn')).nativeElement;
    const noBtn = fixture.debugElement.query(By.css('#yes-btn')).nativeElement;
    expect(yesBtn).toBeTruthy();
    expect(noBtn).toBeTruthy();
  });
  it('should dispatch selectAnswer when clicking answer button', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    component.questionEnd = false;
    const yesBtn = fixture.debugElement.query(By.css('#yes-btn')).nativeElement;
    
    yesBtn.click();
    
    expect(dispatchSpy).toHaveBeenCalledWith(QuestionMapActions.selectAnswer({userSelection: true}));
  });

  it('should display back button if not the first question', () => {
    component.isRootQuestion = false;
    fixture.detectChanges();
    const backBtn = fixture.debugElement.query(By.css('#back-btn')).nativeElement;
    expect(backBtn).toBeTruthy();
  });
  it('should dispatch previousStep when clicking back button', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    component.isRootQuestion = false;
    fixture.detectChanges();
    const backBtn = fixture.debugElement.query(By.css('#back-btn')).nativeElement;
    backBtn.click();

    expect(dispatchSpy).toHaveBeenCalledWith(QuestionMapActions.previousStep());
  });

  it('should display show result button when no questions remain', () => {
    component.questionEnd = true;
    fixture.detectChanges();
    const resultBtn = fixture.debugElement.query(By.css('#result-btn')).nativeElement;
    expect(resultBtn).toBeTruthy();
  });
  it('should navigate result screen when clicking show result button', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.questionEnd = true;
    fixture.detectChanges();
    const resultBtn = fixture.debugElement.query(By.css('#result-btn')).nativeElement;
    resultBtn.click();

    expect(navigateSpy).toHaveBeenCalledWith(['result']);
  });
});
