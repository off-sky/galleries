import { db } from './db';
import {EntityListRequest} from "./types/entity-list-request";
import {EntityType} from "./types";

export const getEntityList = (request: EntityListRequest): string[] => {
    switch (request.type) {
        case EntityType.ARTIST: return getArtistsList(request.filters);
        case EntityType.GALLERY: return getGalleryList(request.filters);
        case EntityType.DRAWING: return getDrawingList(request.filters);
    }
}

function getArtistsList(filters: EntityListRequest['filters']): string[] {
    if (isAnyFiltersApplied(filters)) {
        let result = [];
        if (filters?.byGalleries) {
            const byGalleryResult = Object.keys(db.artists).filter(artistId => {
                return filters.byGalleries.some(galleryId => !!db.artistsByGalleries[galleryId][artistId])
            });
            result.push(...byGalleryResult);
        }
        return result;
    }
    return Object.keys(db.artists);
}

function getGalleryList(filters: EntityListRequest['filters']): string[] {
    if (isAnyFiltersApplied(filters)) {
        let result = [];
        if (filters?.byArtists) {
            const byArtistResult = Object.keys(db.galleries).filter(galleryId => {
                return filters.byArtists.some(artistId => !!db.artistsByGalleries[galleryId][artistId])
            });
            result.push(...byArtistResult);
        }
        return result;
    }
    return Object.keys(db.galleries);
}

function getDrawingList(filters: EntityListRequest['filters']): string[] {
    if (isAnyFiltersApplied(filters)) {
        let result = [];
        if (filters?.byArtists) {
            const byArtistResult = Object.keys(db.drawings).filter(drawingId => {
                return filters.byArtists.some(artistId => !!db.drawingsByArtists[artistId][drawingId])
            });
            result.push(...byArtistResult);
        }
        if (filters?.byGalleries) {
            const byGalleryResult = Object.keys(db.drawings).filter(drawingId => {
                return filters.byGalleries.some(galleryId => !!db.drawingsByGalleries[galleryId][drawingId])
            });
            result.push(...byGalleryResult);
        }
        return result;
    }
    return Object.keys(db.drawings);
}

function isAnyFiltersApplied(filters: EntityListRequest['filters']): boolean {
    return !!(filters?.byGalleries?.length || filters?.byArtists?.length || filters?.byDrawings?.length)
}
