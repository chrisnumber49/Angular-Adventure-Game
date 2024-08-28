import {createActionGroup, props} from '@ngrx/store';

export const DisplayConfigActions = createActionGroup({
  source: 'displayConfig',
  events: {
    'set columns': props<{ newColumnsSetting: any }>(),
    'set filters': props<{ newFiltersSetting: any }>(),
  }
});

