import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './administration/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './administration/events/events.component';
import { StudentsComponent } from './administration/students/students.component';
import { TeachersComponent } from './administration/teachers/teachers.component';
import { SchedulesComponent } from './administration/schedules/schedules.component';
import { SessionsComponent } from './administration/sessions/sessions.component';


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
  },
  {
    path: 'events/:id',
    component: EventsComponent,canActivate: [AuthGuard]
   }
   ,
  {
    path: 'students/:id',
    component: StudentsComponent,canActivate: [AuthGuard]
   }
   ,
  {
    path: 'teachers/:id',
    component: TeachersComponent,canActivate: [AuthGuard]
   }
   ,
  {
    path: 'schedules/:id',
    component: SchedulesComponent,canActivate: [AuthGuard]
   }
   ,
   {
     path: 'sessions/:id',
     component: SessionsComponent,canActivate: [AuthGuard]
    }
    ,
    {
      path: 'choices/:id',
      component: SessionsComponent,canActivate: [AuthGuard]
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
