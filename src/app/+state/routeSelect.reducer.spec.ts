import {QuestionMapActions} from './routeSelect.actions';
import {questionMapReducer, initialState, QuestionState} from './routeSelect.reducer';


describe('questionMapReducer', () => {
  it('should change current current node when choosing answer', () => {
    const expected = JSON.parse(JSON.stringify(initialState));
    expected.questionList[1].selected = true;
    expected.currentNode = expected.questionList[1];

    const userSelection = true;
    const action = QuestionMapActions.selectAnswer({userSelection});

    expect(questionMapReducer(initialState, action)).toEqual(expected);
  });
});
