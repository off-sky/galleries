import {createAction, props} from "@ngrx/store";
import {NavigationRequest} from "./dependencies";

const moduleKey = 'Router'

export const go = createAction(
    `[${moduleKey}]: Go`,
    props<{ request: NavigationRequest }>()
);

export const back = createAction(
    `[${moduleKey}]: Back`
);
