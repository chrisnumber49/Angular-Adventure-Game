import { TEST_ROUTE_MAP } from '../type & const/routeMap';
import { initialState } from './routeSelect.reducer';
import {getCurrentQuestion,getFullRouteMap} from './routeSelect.selector';

describe('Question Route Selectors', () => {
  it('should select the current quesrion node', () => {
    const state = JSON.parse(JSON.stringify(initialState));

    const currentQuestion = getCurrentQuestion.projector(state);

    const expected = state.questionList[0];

    expect(currentQuestion).toEqual(expected);
  });

  xit('should select full question route map that gererated with the questionList', () => {
    const currentState = JSON.parse(JSON.stringify(initialState));
    currentState.questionList[2].selected = true;
    currentState.currentNode = currentState.questionList[2];

    const selector = getFullRouteMap.projector(currentState);

    const expected = TEST_ROUTE_MAP;

    expect(selector).toEqual(expected);
  });
});
