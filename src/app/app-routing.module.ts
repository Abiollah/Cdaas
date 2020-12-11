import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import {UserLoginComponent} from './login/login.component';
import { DashboardComponent } from './report/view/dashboard.component';
<<<<<<< HEAD
import { PatientComponent } from './patient/patient.registration.component';
import  {SettingListComponent } from './administration/view/setting.list.component'
import {ManageUsersComponent} from './administration/view/add.users.component'
import {UserlistComponent} from './administration/view/userlist.component'
import { ManageAllergiesComponent } from './administration/view/add.allergies.component'
import { AllergieslistComponent } from './administration/view/allergieslist.component';
import { ManageLaboratoriesComponent } from './administration/view/add.laboratories.component';
import { LaboratorieslistComponent } from './administration/view/laboratorieslist.component';
=======
import { PatientComponent } from './patient/patient.registration.component'
import  {AddUserRoleComponent } from './administration/view/add.user.role.component'
import  {SettingListComponent } from './administration/view/setting.list.component'
import {ManageUsersComponent} from './administration/view/add.users.component'
import {UserlistComponent} from './administration/view/userlist.component'
import {MetadataListComponent} from './administration/view/metadata.list.component';
import { GenderlistComponent } from './administration/view/genderlist.component';
import { AddGendersComponent } from './administration/view/add.genders.component';
>>>>>>> 945b8fd5c81b25b86acd1b50a1800ebd35df4964

const routes: Routes = [
    {path: '', component: UserLoginComponent},
    {path: 'login', component: UserLoginComponent},
    {path: '', component: AppMainComponent,
    children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'registration', component: PatientComponent},
    {path: 'setting', component: SettingListComponent},
    {path: 'userrole', component: AddUserRoleComponent},
    {path: 'addUser', component: ManageUsersComponent},
    {path: 'userlist', component: UserlistComponent},
<<<<<<< HEAD
    {path: 'addAllergies', component: ManageAllergiesComponent},
    {path: 'allergieslist', component: AllergieslistComponent},
    {path: 'addLaboratories', component: ManageLaboratoriesComponent},
    {path: 'laboratorieslist', component: LaboratorieslistComponent}
   
=======
    {path: 'metadatalist', component: MetadataListComponent},
    {path: 'genderlist', component: GenderlistComponent},
    {path: 'addGender', component: AddGendersComponent},
    {path: 'userlist', component: UserlistComponent}
>>>>>>> 945b8fd5c81b25b86acd1b50a1800ebd35df4964
]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
