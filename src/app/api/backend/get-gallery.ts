import {db} from "./db";

export const getGallery = (galleryId: string): any => {
    return db.galleries[galleryId];
}
