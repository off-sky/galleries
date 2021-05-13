import {createSelector} from "@ngrx/store";
import {getDrawingFeature} from "./get-feature-state";
import {DrawingDetailState} from "../reducers/drawing-details.reducer";
import {getAllArtistByDrawing, getAllDrawings, getAllGalleryByDrawing} from "./drawing-data.selectors";
import {getAllArtists, getAllGalleries} from "../dependencies/store";

const getDrawingDetailState = createSelector(
    getDrawingFeature,
    (state): DrawingDetailState => state.details
);

export const getOpenedDrawingId = createSelector(
    getDrawingDetailState,
    state => state.drawingId
);

const getOpenedDrawingState = createSelector(
    getOpenedDrawingId,
    getAllDrawings,
    (drawingId, allDrawings) => {
        if (!drawingId) {
            return undefined;
        }
        return allDrawings[drawingId];
    }
);

export const getOpenedDrawing = createSelector(
    getOpenedDrawingState,
    state => state?.entity
);

export const getOpenedDrawingLoading = createSelector(
    getOpenedDrawingState,
    state => state?.loading || false
);

export const getOpenedDrawingError = createSelector(
    getOpenedDrawingState,
    state => state?.error
);

// artist by opened drawing
const getArtistStateByOpenedDrawing = createSelector(
    getOpenedDrawingId,
    getAllArtistByDrawing,
    getAllArtists,
    (drawingId, allArtistByDrawing, allArtists) => {
        if (!drawingId) {
            return undefined;
        }
        const artistId = allArtistByDrawing[drawingId]?.artistId;
        if (!artistId) {
            return undefined;
        }
        return allArtists[artistId];
    }
);

export const getArtistByOpenDrawing = createSelector(
    getArtistStateByOpenedDrawing,
    state => state?.entity
);

// gallery by opened drawing
const getGalleryStateByOpenedDrawing = createSelector(
    getOpenedDrawingId,
    getAllGalleryByDrawing,
    getAllGalleries,
    (drawingId, allGalleryByArtist, allGalleries) => {
        if (!drawingId) {
            return undefined;
        }
        const galleryId = allGalleryByArtist[drawingId]?.galleryId;
        if (!galleryId) {
            return undefined;
        }
        return allGalleries[galleryId];
    }
);

export const getGalleryByOpenDrawing= createSelector(
    getGalleryStateByOpenedDrawing,
    state => state?.entity
);

