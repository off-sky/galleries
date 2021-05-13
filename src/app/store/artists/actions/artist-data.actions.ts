import {createAction, props} from "@ngrx/store";
import {Artist} from '../dependencies';

const moduleName = 'Artists';
const submoduleName = 'Data';

export const loadArtistRequested = createAction(
    `[${moduleName}] [${submoduleName}]: Load artist requested`,
    props<{ artistId: string; }>()
);

export const loadArtistSuccess = createAction(
    `[${moduleName}] [${submoduleName}]: Load artist success`,
    props<{ artist: Artist; }>()
);

export const loadArtistFailed = createAction(
    `[${moduleName}] [${submoduleName}]: Load artist failed`,
    props<{ artistId: string; error: any; }>()
)
