import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {homeComponentInit, setAppSection} from "./home.actions";
import {RouterFacade} from "../router/router.facade";
import {map, withLatestFrom} from "rxjs/operators";
import {getAppSectionFromUrl} from "./dependencies";


@Injectable()
export class HomeEffects {

    constructor(
        private actions$: Actions,
        private routerFacade: RouterFacade
    ) {
    }

    public onHomeComponentInit = createEffect(
        () => this.actions$
            .pipe(
                ofType(homeComponentInit),
                withLatestFrom(this.routerFacade.getRouterStateUrl()),
                map(([action, routerState]) => {
                    const section = getAppSectionFromUrl(routerState.url);
                    return setAppSection({ section })
                })
            )
    );
}
