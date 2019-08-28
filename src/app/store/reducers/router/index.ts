import {RouterCancelAction, RouterErrorAction, RouterNavigationAction, RouterReducerState} from '@ngrx/router-store';
import {MergedRoute} from './merged-route';

export {MergedRoute};
export * from './ngrx-router.module';


export {routerReducer} from '@ngrx/router-store';
export {ROUTER_CANCEL, ROUTER_ERROR, ROUTER_NAVIGATION} from '@ngrx/router-store';

export type MergedRouteReducerState = RouterReducerState<MergedRoute>;
export type MergedRouteNavigationAction = RouterNavigationAction<MergedRoute>;
export type MergedRouterCancelAction = RouterCancelAction<any, MergedRoute>;
export type MergedRouterErrorAction = RouterErrorAction<any, MergedRoute>;


export {getMergedRoute} from './router-state.selectors';
