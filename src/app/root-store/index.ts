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

export const getYearsForUser = createSelector(getAppState, (state)=>state.years)
export const getSchoolsForUser = createSelector(getAppState, (state)=>state.schools)
