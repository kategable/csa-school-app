import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as appActions from '../actions/actions'
import { map, exhaustMap, tap, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from 'src/app/services/admin.service';

@Injectable()
export class Effects {

  constructor(private actions$: Actions, private auth: AuthService, private adminService: AdminService) {
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

  @Effect()
  yearsForUser$ = this.actions$.pipe(
    ofType<appActions.LoadEventsForUser>(appActions.ActionTypes.LoadEventsForUser),
    switchMap(() => this.adminService.getEvents().pipe(
      map((data) =>
        new appActions.EventsForUser(data)
      ))));
  @Effect()
  loadStudents$ = this.actions$.pipe(
    ofType<appActions.LoadStudents>(appActions.ActionTypes.LoadStudents),
    switchMap(() => this.adminService.getStudents().pipe(
      map((data) =>
        new appActions.Students(data)
      ))));


  @Effect()
  loadTeachers$ = this.actions$.pipe(
    ofType<appActions.LoadTeachers>(appActions.ActionTypes.LoadTeachers),
    switchMap(() => this.adminService.getTeachers().pipe(
      map((data) =>
        new appActions.Teachers(data)
      ))));

  @Effect() // this can be a catch all event hadler
  userAction$ = this.actions$.pipe(
    ofType<appActions.UserAction>(appActions.ActionTypes.UserAction),
    map((action) => {
      switch (action.payload.name) {
        case appActions.ActionTypes.Login:
          {
            return new appActions.Login();
          }
        default:
          return;

      }
    }));

}
