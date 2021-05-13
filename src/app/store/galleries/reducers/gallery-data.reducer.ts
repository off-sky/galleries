import {EntityDataState, Gallery} from "../dependencies";
import {createReducer, on} from "@ngrx/store";
import {loadGalleryFailed, loadGalleryRequested, loadGallerySuccess} from "../actions/gallery-data.actions";

export interface GalleryDataState {
    galleries: {
        [galleryId: string]: EntityDataState<Gallery>
    }
}

export const initialGalleryDataState: GalleryDataState = {
    galleries: {}
}

export const galleryDataReducer = createReducer<GalleryDataState>(
    {...initialGalleryDataState},
    on(loadGalleryRequested, (state, action) => {
        const { galleryId } = action;
        const previousEntityState: EntityDataState<Gallery> = state.galleries[galleryId] || {};
        const newEntityState: EntityDataState<Gallery> = { ...previousEntityState, loading: true };
        return {
            ...state,
            galleries: {
                ...state.galleries,
                [galleryId]: newEntityState
            }
        };
    }),
    on(loadGallerySuccess, (state, action) => {
        const { gallery } = action;
        const { id: galleryId } = gallery;
        const previousEntityState: EntityDataState<Gallery> = state.galleries[galleryId] || {};
        const newEntityState: EntityDataState<Gallery> = { ...previousEntityState, loading: false, entity: gallery };
        return {
            ...state,
            galleries: {
                ...state.galleries,
                [galleryId]: newEntityState
            }
        };
    }),
    on(loadGalleryFailed, (state, action) => {
        const { galleryId, error } = action;
        const previousEntityState: EntityDataState<Gallery> = state.galleries[galleryId] || {};
        const newEntityState: EntityDataState<Gallery> = { ...previousEntityState, loading: false, error };
        return {
            ...state,
            galleries: {
                ...state.galleries,
                [galleryId]: newEntityState
            }
        };
    }),
)
