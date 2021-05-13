import {Artist, EntityDataState} from "../dependencies";
import {createReducer, on} from "@ngrx/store";
import {loadArtistFailed, loadArtistRequested, loadArtistSuccess} from "../actions/artist-data.actions";

export interface ArtistDataState {
    artists: {
        [artistId: string]: EntityDataState<Artist>
    }
}

export const initialArtistDataState: ArtistDataState = {
    artists: {}
}

export const artistDataReducer = createReducer<ArtistDataState>(
    { ...initialArtistDataState },
    on(loadArtistRequested, (state, action) => {
        const { artistId } = action;
        const previousItemState = state.artists[artistId] || {};
        const newItemState = { ...previousItemState, loading: true };
        return {
            ...state,
            artists: {
                ...state.artists,
                [artistId]: newItemState
            }
        };
    }),
    on(loadArtistSuccess, (state, action) => {
        const { artist } = action;
        const { id: artistId } = artist;
        const previousItemState = state.artists[artistId] || {};
        const newItemState = { ...previousItemState, loading: false, entity: artist };
        return {
            ...state,
            artists: {
                ...state.artists,
                [artistId]: newItemState
            }
        };
    }),
    on(loadArtistFailed, (state, action) => {
        const { artistId, error } = action;
        const previousItemState = state.artists[artistId] || {};
        const newItemState = { ...previousItemState, loading: false, error };
        return {
            ...state,
            artists: {
                ...state.artists,
                [artistId]: newItemState
            }
        };
    })
)
