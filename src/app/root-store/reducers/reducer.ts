import { ActionTypes, ActionUnion } from '../actions/actions'
import { User } from 'src/app/models/user.model';

export interface State {
  schools: any;
  years: any;
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
    updated_at: null,
    user_metadata: null
  },
  schools: null,
  years: null
}

export function filteredAppReducer(state = initialState, action: ActionUnion): State {
  switch (action.type) {
    case ActionTypes.UserChanged: {
      return { ...state, user: action.payload }
    }
    case ActionTypes.YearsForUser: {
      return { ...state, years: action.payload }
    }
    default:
      return state;
  }
}
