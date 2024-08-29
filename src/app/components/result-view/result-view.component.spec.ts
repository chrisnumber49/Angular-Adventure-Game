import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultViewComponent } from './result-view.component';
import { StoreModule } from '@ngrx/store';
import { TreeViewComponent } from '../tree-view.component/tree-view.component';
import { TEST_ROUTE_MAP } from '../../type & const/routeMap';

describe('ResultViewComponent', () => {
  let component: ResultViewComponent;
  let fixture: ComponentFixture<ResultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultViewComponent, TreeViewComponent],
      imports: [
        StoreModule.forRoot({})
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultViewComponent);
    component = fixture.componentInstance;
    component.data = TEST_ROUTE_MAP;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
