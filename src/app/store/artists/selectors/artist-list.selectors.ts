import {createSelector} from "@ngrx/store";
import {getArtistsFeature} from "./get-feature";
import {ArtistListNames} from "../dependencies";
import {ArtistListState} from "../reducers/artist-list.reducers";

const getAllArtistListState = createSelector(
  getArtistsFeature,
  state => state.lists
);

export const getArtistsList = createSelector(
    getAllArtistListState,
    (state, props: { listName: ArtistListNames }): ArtistListState => {
        return state[props.listName];
    }
);

export const getFilters = createSelector(
    getArtistsList,
    state => state.filters
);

export const getListLoading = createSelector(
    getArtistsList,
    state => state.loading
);

export const getListItems = createSelector(
    getArtistsList,
    state => state.items
);

export const getListError= createSelector(
    getArtistsList,
    state => state.error
);



