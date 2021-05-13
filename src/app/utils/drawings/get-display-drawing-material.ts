import {Materials} from "../../types";

export const getDisplayDrawingMaterial = (source: Materials): string => {
    switch (source) {
        case Materials.OIL_ON_CANVAS: return 'Oil on canvas';
        case Materials.OIL_ON_POPLAR_PAPER: return 'Oil on poplar paper';
    }
}
