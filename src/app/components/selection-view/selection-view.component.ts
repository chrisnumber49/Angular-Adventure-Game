import { Question } from './../../type & const/routeMap';
import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import { getCurrentQuestion } from '../../+state/routeSelect.selector';
import { QuestionState } from '../../+state/routeSelect.reducer';
import { QuestionMapActions } from '../../+state/routeSelect.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection-view',
  templateUrl: './selection-view.component.html',
  styleUrl: './selection-view.component.scss'
})
export class SelectionViewComponent {
  questionText: string;
  questionEnd: boolean = false;
  isRootQuestion: boolean = true;

  constructor(private store: Store<QuestionState>, public router: Router,){
    this.store.select(getCurrentQuestion).subscribe((currentNode:Question) => {
      console.log('current node', currentNode);
      this.questionText = currentNode.data;
      this.questionEnd = currentNode.childrenRef? false: true;
      this.isRootQuestion = currentNode.parent? false: true;
    });
  }

  onAnswer(userSelection: boolean){
    this.store.dispatch(QuestionMapActions.selectAnswer({userSelection}));
  }

  onPreviousAnswer(){
    this.store.dispatch(QuestionMapActions.previousStep());
  }

  onCheckResult(){
    this.router.navigate(['result']);
  }
}
