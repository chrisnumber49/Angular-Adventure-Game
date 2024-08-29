import {createActionGroup, emptyProps, props} from '@ngrx/store';

export const QuestionMapActions = createActionGroup({
  source: 'questionMap',
  events: {
    'select answer': props<{ userSelection: boolean }>(),
    'previous step': emptyProps(),
    'restart': emptyProps(),
  }
});

