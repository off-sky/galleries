import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {RouterStateSerializer} from '@ngrx/router-store';
import {RouterStateUrl} from "./dependencies";

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let state: ActivatedRouteSnapshot = routerState.root;
        let params = {...state.params};
        while (state.firstChild) {
            state = state.firstChild;
            params = { ...params, ...state.params };
        }
        return { url, queryParams, params };
    }
}
