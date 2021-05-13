import {EntityType} from "./entity-type";

export interface EntityListRequest {
    type: EntityType;
    filters: {
        byGalleries?: string[];
        byArtists?: string[];
        byDrawings?: string[];
    };
    // normally there would be skip, limit etc.
}
