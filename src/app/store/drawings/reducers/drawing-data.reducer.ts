import {EntityDataState, Drawing} from "../dependencies";
import {createReducer, on} from "@ngrx/store";
import {loadDrawingRequested, loadDrawingSuccess, loadDrawingFailed} from "../actions/drawing-data.actions";

export interface DrawingDataState {
    drawings: {
        [drawingId: string]: EntityDataState<Drawing>
    };
    artistsByDrawings: {
        [drawingId: string]: {
            artistId: string;
        }
    };
    galleriesByDrawings: {
        [drawingId: string]: {
            galleryId: string;
        }
    }
}

export const initialDrawingDataState: DrawingDataState = {
    drawings: {},
    artistsByDrawings: {},
    galleriesByDrawings: {}
}

export const drawingDataReducer = createReducer<DrawingDataState>(
    {...initialDrawingDataState},
    on(loadDrawingRequested, (state, action) => {
        const { drawingId } = action;
        const previousEntityState: EntityDataState<Drawing> = state.drawings[drawingId] || {};
        const newEntityState: EntityDataState<Drawing> = { ...previousEntityState, loading: true };
        return {
            ...state,
            drawings: {
                ...state.drawings,
                [drawingId]: newEntityState
            }
        };
    }),
    on(loadDrawingSuccess, (state, action) => {
        const { drawing, artist, gallery } = action;
        const { id: drawingId } = drawing;
        const previousEntityState: EntityDataState<Drawing> = state.drawings[drawingId] || {};
        const newEntityState: EntityDataState<Drawing> = { ...previousEntityState, loading: false, entity: drawing };
        let resultState =  {
            ...state,
            drawings: {
                ...state.drawings,
                [drawingId]: newEntityState
            }
        };
        if (artist) {
            resultState = {
                ...resultState,
                artistsByDrawings: {
                    ...resultState.artistsByDrawings,
                    [drawingId]: {
                        artistId: artist.id
                    }
                }
            }
        }
        if (gallery) {
            resultState = {
                ...resultState,
                galleriesByDrawings: {
                    ...resultState.galleriesByDrawings,
                    [drawingId]: {
                        galleryId: gallery.id
                    }
                }
            }
        }
        return resultState;
    }),
    on(loadDrawingFailed, (state, action) => {
        const { drawingId, error } = action;
        const previousEntityState: EntityDataState<Drawing> = state.drawings[drawingId] || {};
        const newEntityState: EntityDataState<Drawing> = { ...previousEntityState, loading: false, error };
        return {
            ...state,
            drawings: {
                ...state.drawings,
                [drawingId]: newEntityState
            }
        };
    }),
)
