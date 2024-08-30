import {QuestionMapActions} from './routeSelect.actions';
import {questionMapReducer, initialState} from './routeSelect.reducer';


describe('questionMapReducer', () => {
  it('current node should be changed to next question and selected when choosing answer', () => {
    const expected = JSON.parse(JSON.stringify(initialState));
    expected.questionList[1].selected = true;
    expected.currentNode = expected.questionList[1];

    const userSelection = true;
    const action = QuestionMapActions.selectAnswer({userSelection});

    expect(questionMapReducer(initialState, action)).toEqual(expected);
  });

  it('current node should be unselected and changed back to previous question when clicking previous button', () => {
    const currentState = JSON.parse(JSON.stringify(initialState));
    currentState.questionList[1].selected = true;
    currentState.currentNode = currentState.questionList[1];

    const expected = JSON.parse(JSON.stringify(initialState));

    const action = QuestionMapActions.previousStep();

    expect(questionMapReducer(currentState, action)).toEqual(expected);
  });

  it('current node and the question list should be reset when click restart button', () => {
    const currentState = JSON.parse(JSON.stringify(initialState));
    currentState.questionList[1].selected = true;
    currentState.questionList[3].selected = true;
    currentState.currentNode = currentState.questionList[3];

    const expected = JSON.parse(JSON.stringify(initialState));

    const action = QuestionMapActions.restart();

    expect(questionMapReducer(currentState, action)).toEqual(expected);
  });
});
