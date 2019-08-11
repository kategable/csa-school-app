import * as fromFeatures from './reducers/reducer'
import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store"

export interface State {
    csaApp: fromFeatures.State
}
export const reducers:ActionReducerMap<State>= {
    csaApp: fromFeatures.filteredAppReducer

}
const getAppState = createFeatureSelector<fromFeatures.State>('csaApp')

export const selectUserContext = createSelector(getAppState, (state)=>state.user)