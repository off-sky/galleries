import {ApiDrawing} from "../../common/api-drawing";
import {ApiArtist, ApiGallery} from "../../common";

// drawing id
export type GetDrawingRequest = {
    drawingId: string;
    withArtist?: boolean;
    withGallery?: boolean;
};

export type GetDrawingResponse = {
    drawing: ApiDrawing;
    artist?: ApiArtist;
    gallery?: ApiGallery;
}
