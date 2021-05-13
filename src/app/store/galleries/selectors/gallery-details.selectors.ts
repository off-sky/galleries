import {createSelector} from "@ngrx/store";
import {getGalleriesFeature} from "./get-feature-state";
import {getAllGalleries} from "./gallery-data.selectors";

const getGalleryDetailState = createSelector(
    getGalleriesFeature,
    state => state.details
);

export const getOpenedGalleryId = createSelector(
    getGalleryDetailState,
    state => state.galleryId
);

export const getTab = createSelector(
    getGalleryDetailState,
    state => state.tab
);

// opened gallery
const getOpenedGalleryEntity = createSelector(
    getOpenedGalleryId,
    getAllGalleries,
    (galleryId: string, allGalleries) => {
        return allGalleries[galleryId];
    }
);

export const getOpenGallery = createSelector(
    getOpenedGalleryEntity,
    state => state.entity
);

export const getOpenGalleryLoading = createSelector(
    getOpenedGalleryEntity,
    state => state.loading
);

export const getOpenGalleryError = createSelector(
    getOpenedGalleryEntity,
    state => state.error
);
