import {db} from "./db";

export const getDrawing = ({ drawingId, withArtist, withGallery }): any => {
    const drawing = db.drawings[drawingId];
    if (drawing) {
        const response = {
            drawing
        }
        if (withArtist) {
            const artistIdByDrawing = Object.keys(db.drawingsByArtists)
                .find(artistId => !!db.drawingsByArtists[artistId][drawingId]);
            response['artist'] = db.artists[artistIdByDrawing];
        }
        if (withGallery) {
            const galleryIdByDrawing = Object.keys(db.drawingsByGalleries)
                .find(galleryId => db.drawingsByGalleries[galleryId][drawingId]);
            response['gallery'] = db.galleries[galleryIdByDrawing];
        }
        return response;
    } else {
        throw new Error('No such drawing');
    }
}
