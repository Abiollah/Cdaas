import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import {UserLoginComponent} from './login/login.component';
import { DashboardComponent } from './report/view/dashboard.component';
import { PatientComponent } from './patient/patient.registration.component'
import  {SettingListComponent } from './administration/view/setting-list.component'

const routes: Routes = [
    {path: '', component: UserLoginComponent},
    {path: 'login', component: UserLoginComponent},
    {path: '', component: AppMainComponent,
    children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'registration', component: PatientComponent},
    {path: 'setting', component: SettingListComponent}
]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
