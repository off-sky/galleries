import {db} from "./db";

export const getArtist = (artistId: string): any => {
    return db.artists[artistId];
}
