import {ArtistListFilter, ArtistListNames} from "../dependencies";
import {createReducer, on} from "@ngrx/store";
import * as fromActions from "../actions/artist-list.actions";


export const artistListNames = [
    ArtistListNames.MAIN_ARTIST_LIST,
    ArtistListNames.GALLERY_DETAILS_ARTIST_LIST
]

export interface ArtistListState {
    loading: boolean;
    items: string[];
    error: any;
    filters: ArtistListFilter[];
}

export type AllArtistListState = {
    [key in ArtistListNames]?: ArtistListState;
}

export const getInitialArtistListState = (): ArtistListState => {
    return {
        loading: false,
        items: [],
        error: undefined,
        filters: []
    }
}

export const getInitialAllArtistListState = (): AllArtistListState => {
    const result = {} as AllArtistListState;
    artistListNames.forEach(listName => {
        result[listName] = getInitialArtistListState()
    })
    return result;
}

export const artistListReducer = createReducer<AllArtistListState>(
    { ...getInitialAllArtistListState() },
    on(fromActions.setFilters, (allState, action) => {
        const { listName } = action;
        const state = allState[listName];
        const newState = {
            ...state,
            filters: action.filters
        };
        return {
            ...allState,
            [listName]: { ...newState }
        } as AllArtistListState;
    }),
    on(fromActions.loadListRequested, (allState, action) => {
        const { listName } = action;
        const state = allState[listName];
        const newState = {
            ...state,
            loading: true
        };
        return {
            ...allState,
            [listName]: { ...newState }
        } as AllArtistListState;
    }),
    on(fromActions.loadListSuccess, (allState, action) => {
        const { listName, items } = action;
        const state = allState[listName];
        const newState = {
            ...state,
            loading: false,
            items
        };
        return {
            ...allState,
            [listName]: { ...newState }
        } as AllArtistListState;
    }),
    on(fromActions.loadListFailed, (allState, action) => {
        const { listName, error } = action;
        const state = allState[listName];
        const newState = {
            ...state,
            loading: false,
            error
        };
        return {
            ...allState,
            [listName]: { ...newState }
        } as AllArtistListState;
    })
)
