import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionState } from '../../+state/routeSelect.reducer';
import { Router } from '@angular/router';
import { getFullRouteMap } from '../../+state/routeSelect.selector';
import { IECONode, Orientation } from '../../type & const/econode';
import { QuestionMapActions } from '../../+state/routeSelect.actions';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrl: './result-view.component.scss'
})
export class ResultViewComponent {
  data: IECONode;
  Orientation = Orientation;

  constructor(private store: Store<QuestionState>, public router: Router,){
    this.store.select(getFullRouteMap).subscribe((routeMap) => {
      this.data = routeMap;

      console.log('Full Route Map', this.data);
    });
  }

  onRestart(){
    this.store.dispatch(QuestionMapActions.restart());
    this.router.navigate(['selection']);
  }

}
