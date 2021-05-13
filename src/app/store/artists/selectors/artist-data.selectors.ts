import {createSelector} from "@ngrx/store";
import {getArtistsFeature} from "./get-feature";

const getArtistDataState = createSelector(
    getArtistsFeature,
    state => state.data
);

export const getAllArtists = createSelector(
    getArtistDataState,
    state => state.artists
);

const getArtistEntityState = createSelector(
    getAllArtists,
    (state, props: { artistId: string; }) => state[props.artistId]
);

export const getArtist = createSelector(
    getArtistEntityState,
    state => state?.entity
);

export const getArtistLoading = createSelector(
    getArtistEntityState,
    state => state?.loading
);

export const getArtistError = createSelector(
    getArtistEntityState,
    state => state?.error
);
