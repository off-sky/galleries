import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {back, go} from "./router.actions";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class RouterEffects {

    constructor(
        private router: Router,
        private actions$: Actions
    ) {
    }

    public onNavigate$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(go),
                map(action => {
                    const {
                        path,
                        queryParams,
                        extras
                    } = action.request;
                  this.router.navigate([...path], {
                      queryParams: queryParams,
                      replaceUrl: extras?.replaceUrl || false
                  })
                })
            ),
        {dispatch: false}

    );

    public onBack$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(back),
                map(() => window.history.go(-1))
            ),
        {dispatch: false}
    )
}
