import * as fromData from './artist-data.reducers';
import * as fromLists from './artist-list.reducers';
import * as fromDetails from './artist-details.reducers';
import {combineReducers} from "@ngrx/store";

export interface ArtistsFeatureState {
    data: fromData.ArtistDataState;
    lists: fromLists.AllArtistListState;
    details: fromDetails.ArtistDetailsState;
}

export const artistsFeatureReducer = combineReducers<ArtistsFeatureState>({
    data: fromData.artistDataReducer,
    lists: fromLists.artistListReducer,
    details: fromDetails.artistDetailReducer
})
