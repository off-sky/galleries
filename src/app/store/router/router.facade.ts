import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {NavigationRequest, RouterStateUrl} from "./dependencies";
import {go, back} from "./router.actions";
import {Observable} from "rxjs";
import {getRouterStateUrl} from "./router.selectors";

@Injectable()
export class RouterFacade {
    constructor(
        private store: Store<any>
    ) {
    }

    public go(request: NavigationRequest): void {
        this.store.dispatch(go({ request }));
    }

    public back(): void {
        this.store.dispatch(back())
    }

    public getRouterStateUrl(): Observable<RouterStateUrl> {
        return this.store.select(getRouterStateUrl);
    }
}
