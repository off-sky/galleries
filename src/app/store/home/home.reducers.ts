import {AppSection} from "./dependencies";
import {createReducer, on} from "@ngrx/store";
import {setAppSection} from "./home.actions";

export interface HomeFeatureState {
    section: AppSection
}

export const initialHomeState: HomeFeatureState = {
    section: undefined
}

export const homeFeatureReducer = createReducer<HomeFeatureState>(
    {...initialHomeState },
    on(setAppSection, (state, action) => {
        return {
            ...state,
            section: action.section
        }
    })
)
