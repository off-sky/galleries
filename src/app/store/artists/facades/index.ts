import {ArtistDataFacade} from "./artist-data.facade";
import {ArtistListsFacade} from "./artist-lists.facade";
import {ArtistDetailsFacade} from "./artist-details.facade";
export { ArtistDataFacade, ArtistListsFacade, ArtistDetailsFacade };

export const artistsFeatureFacades = [
    ArtistDataFacade,
    ArtistListsFacade,
    ArtistDetailsFacade
];
