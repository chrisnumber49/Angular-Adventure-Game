import {createFeatureSelector, createSelector} from "@ngrx/store";
import {DISPLAY_CONFIG_FEATURE_KEY} from "./displayConfig.reducer";

export const getDisplayConfigState = createFeatureSelector<any>(DISPLAY_CONFIG_FEATURE_KEY);

export const getColumnsSetting = createSelector(
  getDisplayConfigState,
  (state: any) => {
      return state.columnsSetting;
  }
);

export const getFiltersSetting = createSelector(
    getDisplayConfigState,
    (state: any) => {
        return state.filtersSetting;
    }
);
