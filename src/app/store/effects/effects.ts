import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as appActions from '../actions/actions'
import { map, exhaustMap, tap, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from 'src/app/services/admin.service';
@Injectable()
export class Effects {

  constructor(private actions$: Actions, private auth: AuthService, private adminService: AdminService ) {
        this.auth.localAuthSetup();
    }

    @Effect({ dispatch: false })
    login$ = this.actions$.pipe(
        ofType<appActions.Login>(appActions.ActionTypes.Login),
        map(() => this.auth.login())
    )

    @Effect({ dispatch: false })
    logout$ = this.actions$.pipe(
        ofType<appActions.Logout>(appActions.ActionTypes.Logout),
        map(() => this.auth.logout())
    )

    @Effect({ dispatch: false })
    yearsForUser$ = this.actions$.pipe(
        ofType<appActions.LoadYearsForUser>(appActions.ActionTypes.LoadYearsForUser),
        exhaustMap(() => this.adminService.getYears().pipe(
          map(data =>new appActions.YearsForUser(data)
          ))));

}
