import {createAction, props} from "@ngrx/store";
import {AppSection} from "./dependencies";

const moduleKey = 'Home'

export const setAppSection = createAction(
    `[${moduleKey}]: Set app section`,
    props<{ section: AppSection }>()
);

export const homeComponentInit = createAction(
    `[${moduleKey}] [HomeComponent]: Init`,
)
