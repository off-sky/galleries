import {createFeatureSelector} from "@ngrx/store";
import {drawingFeatureKey} from "../feature-key";
import {DrawingFeatureState} from "../reducers";

export const getDrawingFeature = createFeatureSelector<DrawingFeatureState>(drawingFeatureKey);
