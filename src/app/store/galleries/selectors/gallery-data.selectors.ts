import {createSelector} from "@ngrx/store";
import {getGalleriesFeature} from "./get-feature-state";

const getGalleryDataState = createSelector(
    getGalleriesFeature,
    state => state.data
);

export const getAllGalleries = createSelector(
    getGalleryDataState,
    state => state.galleries
);

const getGalleryEntityState = createSelector(
    getAllGalleries,
    (state, props: { galleryId: string; }) => state[props.galleryId]
);

export const getGallery = createSelector(
    getGalleryEntityState,
    state => state?.entity
);

export const getGalleryLoading = createSelector(
    getGalleryEntityState,
    state => state?.loading
);

export const getGalleryError = createSelector(
    getGalleryEntityState,
    state => state?.error
);
