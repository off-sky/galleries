import {createAction, props} from "@ngrx/store";
import {DrawingListFilter, DrawingListName} from "../dependencies";

const moduleName = 'Drawings';
const submoduleName = 'List';

export const listInitialized = createAction(
    `[${moduleName}] [${submoduleName}] [DrawingListComponent]: List initialized`,
    props<{ listName: DrawingListName }>()
);

export const setFilters = createAction(
    `[${moduleName}] [${submoduleName}]: Set filters`,
    props<{ listName: DrawingListName; filters: DrawingListFilter[];}>()
);

export const loadListRequested = createAction(
    `[${moduleName}] [${submoduleName}]: Load list requested`,
    props<{ listName: DrawingListName; }>()
);

export const loadListSuccess = createAction(
    `[${moduleName}] [${submoduleName}]: Load list success`,
    props<{ listName: DrawingListName; items: string[]; }>()
);

export const loadListFailed = createAction(
    `[${moduleName}] [${submoduleName}]: Load list failed`,
    props<{ listName: DrawingListName; error: any; }>()
);

