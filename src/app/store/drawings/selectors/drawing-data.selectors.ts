import {createSelector} from "@ngrx/store";
import {getDrawingFeature} from "./get-feature-state";

const getDrawingDataState = createSelector(
    getDrawingFeature,
    state => state.data
);

export const getAllDrawings = createSelector(
    getDrawingDataState,
    state => state.drawings
);

const getDrawingEntityState = createSelector(
    getAllDrawings,
    (state, props: { drawingId: string; }) => state[props.drawingId]
);

export const getDrawing = createSelector(
    getDrawingEntityState,
    state => state?.entity
);

export const getDrawingLoading = createSelector(
    getDrawingEntityState,
    state => state?.loading
);

export const getDrawingError = createSelector(
    getDrawingEntityState,
    state => state?.error
);

// artist id by drawing
export const getAllArtistByDrawing = createSelector(
    getDrawingDataState,
    state => state.artistsByDrawings
);


// gallery id by drawing
export const getAllGalleryByDrawing = createSelector(
    getDrawingDataState,
    state => state.galleriesByDrawings
);
