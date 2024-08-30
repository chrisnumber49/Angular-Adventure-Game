import {createReducer, on} from "@ngrx/store";
import {QuestionMapActions} from "./routeSelect.actions";
import { Question, questionList } from "../type & const/routeMap";

export const QUESTION_MAP_FEATURE_KEY = 'question-Map';

export interface QuestionState {
  questionList: Question[];
  currentNode: Question;
}

export const initialState: QuestionState = {
  questionList: questionList,
  currentNode: questionList[0]
}

export const questionMapReducer = createReducer(
  initialState,
  on(QuestionMapActions.selectAnswer, (state: QuestionState, { userSelection }) => {
    // deep copy newState from state
    const newState = JSON.parse(JSON.stringify(state));
    
    // base on user's answer get the following question
    const selectedChild = newState.questionList.find((question)=>{
      const selectedId = newState.currentNode.childrenRef?.find((child)=>{
        return child.value === userSelection; 
      }).questionId;

      return question.questionId === selectedId;
    })

    // set the selected to true for the result display color
    selectedChild.selected = true;
    // move on to selectedChild
    newState.currentNode = selectedChild

    return newState;
  }),

  on(QuestionMapActions.previousStep, (state: QuestionState) => {
    const newState = JSON.parse(JSON.stringify(state));

    // set the selected of current node to false
    newState.questionList.find((question)=>{
     return question.questionId === newState.currentNode.questionId;
    }).selected = false;

    // then set the current node back to the parent node (previous step)
    newState.currentNode = newState.questionList.find((question)=>{
      return question.questionId === newState.currentNode.parent;
     });

    return newState;
  }),

  on(QuestionMapActions.restart, (state: QuestionState) => {
    return initialState;
  }),
);
