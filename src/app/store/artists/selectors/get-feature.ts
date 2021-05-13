import {createFeatureSelector} from "@ngrx/store";
import {ArtistsFeatureState} from "../reducers";
import {artistsFeatureKey} from "../feature-key";

export const getArtistsFeature = createFeatureSelector<ArtistsFeatureState>(artistsFeatureKey);
