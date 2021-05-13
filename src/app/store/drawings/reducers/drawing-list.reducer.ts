import {DrawingListFilter, DrawingListName} from "../dependencies";
import {createReducer, on} from "@ngrx/store";
import * as fromActions from '../actions/drawing-list.actions';

export const drawingListNames = [
    DrawingListName.MAIN_DRAWING_LIST,
    DrawingListName.ARTIST_DETAILS_DRAWING_LIST,
    DrawingListName.GALLERY_DETAILS_DRAWING_LIST
]

export interface DrawingListState {
    loading: boolean;
    items: string[];
    error: any;
    filters: DrawingListFilter[];
}

export type AllDrawingListState = {
    [key in DrawingListName]?: DrawingListState;
}

export const getInitialDrawingListState = (): DrawingListState => {
    return {
        loading: false,
        items: [],
        error: undefined,
        filters: []
    }
}

export const getInitialAllDrawingListState = (): AllDrawingListState => {
    const result = {} as AllDrawingListState;
    drawingListNames.forEach(listName => {
        result[listName] = getInitialDrawingListState()
    })
    return result;
}

export const drawingListReducer = createReducer<AllDrawingListState>(
    { ...getInitialAllDrawingListState() },
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
        } as AllDrawingListState;
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
        } as AllDrawingListState;
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
        } as AllDrawingListState;
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
        } as AllDrawingListState;
    })
)




