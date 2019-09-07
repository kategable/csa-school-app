import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import * as fromRoot from './index'

import {Effects as RootEffects} from './effects/effects'
import { State } from './index';
export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze]: [];

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(fromRoot.reducers, {metaReducers}),
        EffectsModule.forRoot([RootEffects]),
    ],
    providers: [RootEffects]
})
export class RootStoreModule { }
