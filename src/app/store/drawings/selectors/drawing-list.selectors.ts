import {createSelector} from "@ngrx/store";
import {getGalleriesFeature} from "./get-feature-state";
import {GalleryListName} from "../dependencies";
import {GalleryListState} from "../reducers/gallery-list.reducer";

export const getAllGalleryListState = createSelector(
    getGalleriesFeature,
    state => state.lists
);

export const getGalleryListState = createSelector(
    getAllGalleryListState,
    (state, props: { listName: GalleryListName }): GalleryListState => state[props.listName]
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

