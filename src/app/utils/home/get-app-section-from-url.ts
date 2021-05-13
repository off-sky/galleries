import {AppSection} from "../../types";

export const getAppSectionFromUrl = (url: string): AppSection => {
    if (!(url && url.length)) {
        return undefined;
    }
    return url.split('/')[1] as AppSection;
}
