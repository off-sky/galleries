import {ArtistDetailsTab} from "../dependencies";
import {createReducer, on} from "@ngrx/store";
import {setArtistId, setTab} from "../actions/artist-details.actions";

export interface ArtistDetailsState {
    artistId: string;
    tab: ArtistDetailsTab
};

export const initialArtistDetailState: ArtistDetailsState = {
    artistId: undefined,
    tab: undefined
};

export const artistDetailReducer = createReducer<ArtistDetailsState>(
    { ...initialArtistDetailState },
    on(
     setArtistId,
        (state, action) => {
            const { artistId } = action;
            return {
                ...state,
                artistId
            } as ArtistDetailsState;
        }
    ),
    on(
        setTab,
        (state, action) => {
            const { tab } = action;
            return {
                ...state,
                tab
            } as ArtistDetailsState;
        }
    ),
)
