import * as fromLists from './drawing-list.reducer';
import * as fromData from './drawing-data.reducer';
import * as fromDetails from './drawing-details.reducer';
import {combineReducers} from "@ngrx/store";

export interface DrawingFeatureState {
    lists: fromLists.AllDrawingListState;
    data: fromData.DrawingDataState;
    details: fromDetails.DrawingDetailState;
}

export const drawingFeatureReducer = combineReducers<DrawingFeatureState>({
    lists: fromLists.drawingListReducer,
    data: fromData.drawingDataReducer,
    details: fromDetails.drawingDetailReducer
})
