import {createSelector} from "@ngrx/store";
import {getDrawingFeature} from "./get-feature-state";
import {DrawingListName} from "../dependencies";
import {DrawingListState} from "../reducers/drawing-list.reducer";

export const getAllDrawingListState = createSelector(
    getDrawingFeature,
    state => state.lists
);

export const getGalleryListState = createSelector(
    getAllDrawingListState,
    (state, props: { listName: DrawingListName }): DrawingListState => state[props.listName]
);

export const getFilters = createSelector(
    getGalleryListState,
    state => state.filters
);

export const getListLoading = createSelector(
    getGalleryListState,
    state => state.loading
);

export const getListItems = createSelector(
    getGalleryListState,
    state => state.items
);

export const getListError= createSelector(
    getGalleryListState,
    state => state.error
);

