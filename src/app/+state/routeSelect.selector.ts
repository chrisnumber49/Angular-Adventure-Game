import {createFeatureSelector, createSelector} from "@ngrx/store";
import {QUESTION_MAP_FEATURE_KEY, QuestionState} from "./routeSelect.reducer";

export const getQuestionMapState = createFeatureSelector<any>(QUESTION_MAP_FEATURE_KEY);

export const getCurrentQuestion = createSelector(
  getQuestionMapState,
  (state) => {
      return state.currentNode;
  }
);

export const getFullRouteMap = createSelector(
  getQuestionMapState,
  (state) => {
    const stateCopy = JSON.parse(JSON.stringify(state));

    // based on the question list, create a full route map tree to display the result
    const routeMap = stateCopy.questionList[0];
    stateCopy.questionList.forEach((question)=>{
      question.linkColor = 'black';
      question.background = question.selected? 'red': 'silver';

      // append child nodes under current node to form a tree structure
      if(question.childrenRef){
        question.children = [];

        question.childrenRef.forEach((child) => {
          const targetNode = stateCopy.questionList.find((question) => {
            return question.id === child.id;
          });

          question.children.push(targetNode);
        });
      }

      delete question.id;
      delete question.parent;
      delete question.selected;
      delete question.childrenRef;
    })

    return routeMap;
  }
);