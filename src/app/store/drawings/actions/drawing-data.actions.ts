import {createAction, props} from "@ngrx/store";
import {Artist, Drawing, Gallery} from "../dependencies";

const moduleName = 'Drawings';
const submoduleName = 'Data';

export const loadDrawingRequested = createAction(
    `[${moduleName}] [${submoduleName}]: Load drawing requested`,
    props<{ drawingId: string; withArtist?: boolean; withGallery?: boolean; }>()
);

export const loadDrawingSuccess = createAction(
    `[${moduleName}] [${submoduleName}]: Load drawing success`,
    props<{ drawing: Drawing; artist?: Artist; gallery?: Gallery; }>()
);

export const loadDrawingFailed = createAction(
    `[${moduleName}] [${submoduleName}]: Load drawing failed`,
    props<{ drawingId: string; error: any; }>()
);
