import {ApiEntityType, DrawingListFilter, EntityType, GetEntityListRequest} from "./dependencies";

export const getDrawingsListRequest = (filters: DrawingListFilter[] = []): GetEntityListRequest => {
    const byArtists = filters.filter(f => f.type === EntityType.ARTIST)
        .map(f => f.id);
    const byDrawings = filters.filter(f => f.type === EntityType.DRAWING)
        .map(f => f.id);
    const byGalleries = filters.filter(f => f.type === EntityType.GALLERY)
        .map(f => f.id);
    const request: GetEntityListRequest = {
        type: ApiEntityType.DRAWING,
        filters: {
            byArtists,
            byDrawings,
            byGalleries
        }
    }
    return request;
}
