import {Action} from '@ngrx/store'
import { User } from 'src/app/models/user.model';
export enum ActionTypes{
    Login = 'Login action',
    Logout = 'Logout action',
    UserChanged = 'UserChanged action'
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

export type ActionUnion = Login | Logout |
 UserChanged;
