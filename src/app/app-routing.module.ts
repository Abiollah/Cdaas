import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import {UserLoginComponent} from './login/login.component';
import { DashboardComponent } from './report/view/dashboard.component';
import { PatientComponent } from './patient/patient.registration.component';
import  {SettingListComponent } from './administration/view/setting.list.component'
import {ManageUsersComponent} from './administration/view/add.users.component'
import {UserlistComponent} from './administration/view/userlist.component'
import { ManageAllergiesComponent } from './administration/view/add.allergies.component'
import { AllergieslistComponent } from './administration/view/allergieslist.component';
import { ManageLaboratoriesComponent } from './administration/view/add.laboratories.component';
import { LaboratorieslistComponent } from './administration/view/laboratorieslist.component';

const routes: Routes = [
    {path: '', component: UserLoginComponent},
    {path: 'login', component: UserLoginComponent},
    {path: '', component: AppMainComponent,
    children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'registration', component: PatientComponent},
    {path: 'setting', component: SettingListComponent},
    {path: 'addUser', component: ManageUsersComponent},
    {path: 'userlist', component: UserlistComponent},
    {path: 'addAllergies', component: ManageAllergiesComponent},
    {path: 'allergieslist', component: AllergieslistComponent},
    {path: 'addLaboratories', component: ManageLaboratoriesComponent},
    {path: 'laboratorieslist', component: LaboratorieslistComponent}
   
]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
