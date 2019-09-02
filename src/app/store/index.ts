import * as fromFeatures from './reducers/reducer'
import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store"
import {getMergedRoute} from './reducers/router/router-state.selectors'

export interface State {
    csaApp: fromFeatures.State
}
export const reducers:ActionReducerMap<State>= {
    csaApp: fromFeatures.filteredAppReducer

}
const getAppState = createFeatureSelector<fromFeatures.State>('csaApp')

export const selectUserContext = createSelector(getAppState, (state)=>state.user)

export const getEventsForUser = createSelector(getAppState, (state)=>state.events)
export const getSchoolsForUser = createSelector(getAppState, (state)=>state.schools)
export const getSelectedEvent = createSelector(getEventsForUser, getMergedRoute,(events, mergedRoute) => {
    if(events == null) return null;
    return events.find(i=> i.id== mergedRoute.params.id);
});
export const getStudents = createSelector(getAppState, (state)=>state.students);
export const getTeachers= createSelector(getAppState, (state)=>state.teachers);
export const getStudentsWithTeachers = createSelector(getStudents, getTeachers,(students, teachers) => {
    if(students === null || teachers === null) return null;
    students.map(s=>s.teacher = teachers.find(t=>t.id ===s.teacherId));
    return students;
}) 