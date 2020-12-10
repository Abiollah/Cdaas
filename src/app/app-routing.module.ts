import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import {UserLoginComponent} from './login/login.component';
import { DashboardComponent } from './report/view/dashboard.component';
import { PatientComponent } from './patient/patient.registration.component'
<<<<<<< HEAD
import  {SettingListComponent } from './administration/view/setting-list.component'
import  {AddUserRoleComponent } from './administration/service/settings/add-user-role.component'

=======
import  {SettingListComponent } from './administration/view/setting.list.component'
import {ManageUsersComponent} from './administration/view/add.users.component'
import {UserlistComponent} from './administration/view/userlist.component'
>>>>>>> fbf8aba359734df406193fe082c0c310ed3201aa
const routes: Routes = [
    {path: '', component: UserLoginComponent},
    {path: 'login', component: UserLoginComponent},
    {path: '', component: AppMainComponent,
    children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'registration', component: PatientComponent},
    {path: 'setting', component: SettingListComponent},
<<<<<<< HEAD
    {path: 'userrole', component: AddUserRoleComponent}
=======
    {path: 'addUser', component: ManageUsersComponent},
    {path: 'userlist', component: UserlistComponent}
>>>>>>> fbf8aba359734df406193fe082c0c310ed3201aa
]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
