import {createReducer, on} from "@ngrx/store";
import {DisplayConfigActions} from "./displayConfig.actions";

export const DISPLAY_CONFIG_FEATURE_KEY = 'display-config';
export const initialDisplayConfig: any =
    localStorage.getItem('capture-display-config')?
    JSON.parse(localStorage.getItem('capture-display-config')|| ''):
    {
      columnsSetting: {},
      filtersSetting: {}
    };

export const displayConfigReducer = createReducer(
  initialDisplayConfig,
  on(DisplayConfigActions.setColumns, (state, { newColumnsSetting }) => {
    // for newDisplayConfig columnsSetting in reducer, it will contain all columns setting for both task list and dashboard
    const newDisplayConfig = JSON.parse(JSON.stringify(state));
    Object.keys(newColumnsSetting).forEach((key) => {
      newDisplayConfig.columnsSetting[key] = newColumnsSetting[key];
    });
    localStorage.setItem('capture-display-config', JSON.stringify(newDisplayConfig));

    return newDisplayConfig;
  }),
  on(DisplayConfigActions.setFilters, (state, { newFiltersSetting }) => {
    const newDisplayConfig = JSON.parse(JSON.stringify(state));
    Object.keys(newFiltersSetting).forEach((key) => {
        newDisplayConfig.filtersSetting[key] = newFiltersSetting[key];
    });
    localStorage.setItem('capture-display-config', JSON.stringify(newDisplayConfig));

    return newDisplayConfig;
  }),
);
