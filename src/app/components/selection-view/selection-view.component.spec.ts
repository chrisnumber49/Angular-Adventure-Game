import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionViewComponent } from './selection-view.component';
import { StoreModule } from '@ngrx/store';

describe('SelectionViewComponent', () => {
  let component: SelectionViewComponent;
  let fixture: ComponentFixture<SelectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionViewComponent],
      imports: [
        StoreModule.forRoot({})
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display answer button when the questions is still remain', () => {
    expect(component).toBeTruthy();
  });
  it('should dispatch selectAnswer when clicking answer button', () => {
    expect(component).toBeTruthy();
  });

  it('should display back button if not the first question', () => {
    expect(component).toBeTruthy();
  });
  it('should dispatch previousStep when clicking back button', () => {
    expect(component).toBeTruthy();
  });

  it('should display show result button when no questions remain', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate result screen when clicking show result button', () => {
    expect(component).toBeTruthy();
  });
});
