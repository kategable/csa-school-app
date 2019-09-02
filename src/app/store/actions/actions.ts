import {Action} from '@ngrx/store'
import { User } from 'src/app/models/user.model';
export enum ActionTypes{
    Login = 'Login action',
    Logout = 'Logout action',
    UserChanged = 'UserChanged action',
    EventsForUser = 'EventsForUser action',
    SelectedEvent = 'SelectedEvent action',
    LoadEventsForUser = 'Load-EventsForUser action',
    LoadStudents = 'Load-Students action',
    LoadTeachers = 'Load-Teachers action',    
    Students = 'Students action',
    Teachers = 'Teachers action',
}

export class Login implements Action{
    readonly type = ActionTypes.Login;
}
export class Logout implements Action{
    readonly type = ActionTypes.Logout;
}
export class UserChanged implements Action{
    readonly type = ActionTypes.UserChanged;
    constructor(public payload: any){}
}
export class EventsForUser implements Action{
  readonly type = ActionTypes.EventsForUser;
  constructor(public payload: any){}
}
export class LoadEventsForUser implements Action{
  readonly type = ActionTypes.LoadEventsForUser;
}
export class SelectedEvent implements Action{
  readonly type = ActionTypes.SelectedEvent;
  constructor(public payload: any){}
}
export class LoadStudents implements Action{
  readonly type = ActionTypes.LoadStudents;
}
export class LoadTeachers implements Action{
  readonly type = ActionTypes.LoadTeachers;
}
export class Students implements Action{
  readonly type = ActionTypes.Students ;
  constructor(public payload: any){}
}
export class Teachers implements Action{
  readonly type = ActionTypes.Teachers;
  constructor(public payload: any){}
}

export type ActionUnion = Login | Logout
 | UserChanged | EventsForUser 
 | LoadEventsForUser | SelectedEvent
 | LoadStudents | LoadTeachers
 | Students | Teachers ;
