import {createSelector} from "@ngrx/store";
import {getArtistsFeature} from "./get-feature";
import {getAllArtists} from "./artist-data.selectors";

const getArtistDetailState = createSelector(
    getArtistsFeature,
    state => state.details
);

export const getArtistId = createSelector(
    getArtistDetailState,
    state => state.artistId
);

export const getTab = createSelector(
    getArtistDetailState,
    state => state.tab
);

// opened artist
const getOpenedArtistEntity = createSelector(
    getArtistId,
    getAllArtists,
    (artistId, allArtists) => {
        if (!artistId) {
            return undefined;
        }
        return allArtists[artistId];
    }
);

export const getOpenedArtist = createSelector(
    getOpenedArtistEntity,
    state => state?.entity
);

export const getOpenedArtistLoading = createSelector(
    getOpenedArtistEntity,
    state => state?.loading
);

export const getOpenedArtistError = createSelector(
    getOpenedArtistEntity,
    state => state?.error
);
