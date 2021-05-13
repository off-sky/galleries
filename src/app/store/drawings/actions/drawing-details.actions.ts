import {createAction, props} from "@ngrx/store";
import {DrawingDetailsTab} from "../dependencies";

const moduleName = 'Drawings';
const submoduleName = 'Details';

export const setDrawingId = createAction(
    `[${moduleName}] [${submoduleName}]: Set drawing id`,
    props<{ drawingId: string }>()
);

export const setTab = createAction(
    `[${moduleName}] [${submoduleName}]: Set tab`,
    props<{ tab: DrawingDetailsTab }>()
);
