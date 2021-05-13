import {ArtistDetailsTab} from "./artist-details-tab";

export interface ArtistDetailsRouteData {
    artistId: string;
    tab?: ArtistDetailsTab;
}
