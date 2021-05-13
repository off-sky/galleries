import {createFeatureSelector, createSelector} from "@ngrx/store";
import {routerFeatureKey} from "./feature-key";
import {RouterStateUrl} from "./dependencies";

const getRouterFeature = createFeatureSelector<any>(routerFeatureKey);

export const getRouterStateUrl = createSelector(
    getRouterFeature,
    (state): RouterStateUrl => state?.state
);
