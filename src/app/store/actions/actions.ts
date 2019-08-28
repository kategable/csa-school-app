import {Action} from '@ngrx/store'
import { User } from 'src/app/models/user.model';
export enum ActionTypes{
    Login = 'Login action',
    Logout = 'Logout action',
    UserChanged = 'UserChanged action',
    YearsForUser = 'YearsForUser action',
    LoadYearsForUser = 'Load-YearsForUser action'
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
export class YearsForUser implements Action{
  readonly type = ActionTypes.YearsForUser;
  constructor(public payload: any){}
}
export class LoadYearsForUser implements Action{
  readonly type = ActionTypes.LoadYearsForUser;
}
export type ActionUnion = Login | Logout |
 UserChanged | YearsForUser | LoadYearsForUser;
