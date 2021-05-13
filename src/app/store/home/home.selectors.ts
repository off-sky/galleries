import {createFeatureSelector, createSelector} from "@ngrx/store";
import {homeFeatureKey} from "./feature-key";
import {HomeFeatureState} from "./home.reducers";

const featureState = createFeatureSelector<HomeFeatureState>(homeFeatureKey);

export const getSection = createSelector(
    featureState,
    state => state.section
);
