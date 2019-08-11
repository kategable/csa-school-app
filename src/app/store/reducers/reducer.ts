import { ActionTypes, ActionUnion } from '../actions/actions'
import { User } from 'src/app/model/user.model';

export interface State {
    user: User
}

export const initialState: State = {
    user: {
        loggedIn: false,
        nickname: 'guest',
        name: '',
        email: '',
        email_verified: false,
        picture: '',
        updated_at:null
    }
}

export function filteredAppReducer(state = initialState, action: ActionUnion): State {
    switch (action.type) {
        case ActionTypes.UserChanged: {

            let user = {
                loggedIn:action.payload.loggedIn,
                email: action.payload.email,
                email_verified: action.payload.email_verified,
                name: action.payload.name,
                nickname: action.payload.nickname,
                picture: action.payload.picture,
                updated_at: action.payload.updated_at
            };
            console.log(action.payload)
            return { ...state, user: user }
        }
        default:
            return state;
    }
}