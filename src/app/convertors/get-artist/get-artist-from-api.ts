import {ApiArtist, Artist, getDisplayDateFromUTC} from "./dependencies";

export const getArtistFromApi = (source: ApiArtist): Artist => {
    return {
        id: source.id,
        firstName: source.firstName,
        lastName: source.lastName,
        displayBornDate: getDisplayDateFromUTC(source.bornUTC)
    }
};

