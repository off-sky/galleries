import {DrawingDetailsTab} from "../dependencies";
import {createReducer, on} from "@ngrx/store";
import {setDrawingId, setTab} from "../actions/drawing-details.actions";

export interface DrawingDetailState {
    drawingId: string;
    tab: DrawingDetailsTab
};

export const initialDrawingDetailState: DrawingDetailState = {
    drawingId: undefined,
    tab: undefined
};


export const drawingDetailReducer = createReducer<DrawingDetailState>(
    {...initialDrawingDetailState},
    on(
        setDrawingId,
        (state, action) => {
            return {
                ...state,
                drawingId: action.drawingId
            }
        }
    ),
    on(
        setTab,
        (state, action) => {
            return {
                ...state,
                tab: action.tab
            }
        }
    )
);
