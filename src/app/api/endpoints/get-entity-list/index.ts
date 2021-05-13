import {ApiEntityType} from "../../common/entity-type";


export interface GetEntityListRequest {
    type: ApiEntityType;
    filters: {
        byGalleries?: string[];
        byArtists?: string[];
        byDrawings?: string[];
    };
}

export type GetEntityListResponse = string[];
