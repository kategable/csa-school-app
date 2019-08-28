import { ActionTypes, ActionUnion } from '../actions/actions'
import { User } from 'src/app/models/user.model';

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
        updated_at:null,
        user_metadata: null
    }
}

export function filteredAppReducer(state = initialState, action: ActionUnion): State {
    switch (action.type) {
        case ActionTypes.UserChanged: {
          console.log(action.payload)
            return { ...state, user: action.payload }
        }
        default:
            return state;
    }
}
