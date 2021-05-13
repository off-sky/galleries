import {GalleryListFilter, GalleryListName} from "../dependencies";
import {createReducer, on} from "@ngrx/store";
import * as fromActions from '../actions/gallery-list.actions';

export const galleryListNames = [
    GalleryListName.MAIN_LIST,
    GalleryListName.ARTIST_DETAILS_GALLERY_LIST
]

export interface GalleryListState {
    loading: boolean;
    items: string[];
    error: any;
    filters: GalleryListFilter[];
}

export type AllGalleryListState = {
    [key in GalleryListName]?: GalleryListState;
}

export const getInitialGalleryListState = (): GalleryListState => {
    return {
        loading: false,
        items: [],
        error: undefined,
        filters: []
    }
}

export const getInitialAllGalleryListState = (): AllGalleryListState => {
    const result = {} as AllGalleryListState;
    galleryListNames.forEach(listName => {
        result[listName] = getInitialGalleryListState()
    })
    return result;
}

export const galleryListReducer = createReducer<AllGalleryListState>(
    { ...getInitialAllGalleryListState() },
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
        } as AllGalleryListState;
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
        } as AllGalleryListState;
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
        } as AllGalleryListState;
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
        } as AllGalleryListState;
    })
)




