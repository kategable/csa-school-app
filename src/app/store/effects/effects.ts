import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as appActions from '../actions/actions'
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
@Injectable()
export class Effects {
    constructor(private actions$: Actions, private auth: AuthService) {
        this.auth.localAuthSetup();       
    }

    @Effect({ dispatch: false })
    login$ = this.actions$.pipe(
        ofType<appActions.ActionUnion>(appActions.ActionTypes.Login),
        map(() => this.auth.login())
    )

    @Effect({ dispatch: false })
    logout$ = this.actions$.pipe(
        ofType<appActions.ActionUnion>(appActions.ActionTypes.Logout),
        map(() => this.auth.logout())
    )
}