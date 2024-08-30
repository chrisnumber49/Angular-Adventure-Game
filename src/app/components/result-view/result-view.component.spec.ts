import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultViewComponent } from './result-view.component';
import { StoreModule } from '@ngrx/store';
import { TreeViewComponent } from '../tree-view.component/tree-view.component';
import { TEST_ROUTE_MAP } from '../../type & const/routeMap';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import { initialState } from '../../+state/routeSelect.reducer';
import { By } from '@angular/platform-browser';
import { QuestionMapActions } from '../../+state/routeSelect.actions';
import { Router } from '@angular/router';

let store: MockStore;
let router:Router;

describe('ResultViewComponent', () => {
  let component: ResultViewComponent;
  let fixture: ComponentFixture<ResultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultViewComponent, TreeViewComponent],
      imports: [
        StoreModule.forRoot({})
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultViewComponent);
    component = fixture.componentInstance;
    component.data = TEST_ROUTE_MAP;
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset question map and navigate back to selection screen when clicking restart button', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.debugElement.query(By.css('#restart-btn')).nativeElement;
    button.click();
    
    expect(button).toBeTruthy();
    expect(dispatchSpy).toHaveBeenCalledWith(QuestionMapActions.restart());
    expect(navigateSpy).toHaveBeenCalledWith(['selection']);
  });
});
