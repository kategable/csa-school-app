import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './administration/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,canActivate: [AuthGuard]
  }
  ,
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
