import {createAction, props} from "@ngrx/store";
import {ArtistDetailsTab} from "../dependencies";

const moduleName = 'Artists';
const submoduleName = 'Details';

export const setArtistId = createAction(
    `[${moduleName}] [${submoduleName}]: Set artist id`,
    props<{ artistId: string }>()
);

export const setTab = createAction(
    `[${moduleName}] [${submoduleName}]: Set tab`,
    props<{ tab: ArtistDetailsTab }>()
);
