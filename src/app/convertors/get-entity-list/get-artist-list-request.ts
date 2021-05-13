import {GetEntityListRequest, ApiEntityType, ArtistListFilter, EntityType } from "./dependencies";

export const getArtistListRequest = (filters: ArtistListFilter[]): GetEntityListRequest => {
    const byGalleries = filters.filter(f => f.type === EntityType.GALLERY)
        .map(f => f.id);
    const request: GetEntityListRequest = {
        type: ApiEntityType.ARTIST,
        filters: {
            byGalleries
        }
    }
    return request;
}
