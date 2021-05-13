import {ApiEntityType, GalleryListFilter, GetEntityListRequest, EntityType} from "./dependencies";

export const getGalleryListRequest = (filters: GalleryListFilter[] = []): GetEntityListRequest => {
    const byArtists = filters.filter(f => f.type === EntityType.ARTIST)
        .map(f => f.id);
    const byDrawings = filters.filter(f => f.type === EntityType.DRAWING)
        .map(f => f.id);
    const request: GetEntityListRequest = {
        type: ApiEntityType.GALLERY,
        filters: {
            byArtists,
            byDrawings
        }
    }
    return request;
}
