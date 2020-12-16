import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import {UserLoginComponent} from './login/login.component';
import { DashboardComponent } from './report/view/dashboard.component';
import { PatientComponent } from './client/view/patient.registration.component';
import  {SettingListComponent } from './administration/view/setting.list.component'
import {ManageUsersComponent} from './administration/view/add.users.component'
import {UserlistComponent} from './administration/view/userlist.component'
import { ManageAllergiesComponent } from './administration/view/add.allergies.component'
import { AllergieslistComponent } from './administration/view/allergieslist.component';
import { AddReligionComponent } from './administration/view/add-religion.component';
import { ManageLaboratoriesComponent } from './administration/view/add.laboratories.component';
import { LaboratorieslistComponent } from './administration/view/laboratorieslist.component';
import  {AddUserRoleComponent } from './administration/view/add.user.role.component'
import {MetadataListComponent} from './administration/view/metadata.list.component';
import { GenderlistComponent } from './administration/view/genderlist.component';
import { AddGendersComponent } from './administration/view/add.genders.component';
import { ManagePharmaciesComponent } from './administration/view/add.pharmacies.component';
import { PharmacieslistComponent } from './administration/view/pharmacieslist.component';
import {ClientPortalListComponent} from './client/view/client.portal.list.component';
import {UserRoleListComponent} from './administration/view/user-role-list.component';
import {AuthGuardService} from './administration/service/auth-guard.service';
import { MaritalStatuslistComponent } from './administration/view/marital-statuslist.component';
import { AddMaritalstatusComponent } from './administration/view/add.maritalstatus.component';
import { ClientPortalDetailComponent } from './client/view/client-portal-detail.component';
import { ManageOccupationComponent } from './administration/view/add.occupation.component';
import { OccupationlistComponent } from './administration/view/occupationlist.component';
import { ManageQualificationComponent } from './administration/view/add.qualification.component';
import { QualificationlistComponent } from './administration/view/qualificationlist.component';

const routes: Routes = [
    {path: '', component: UserLoginComponent},
    {path: '', component: AppMainComponent,
    children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'registration', component: PatientComponent},
    {path: 'setting', component: SettingListComponent},
    {path: 'userrole', component: AddUserRoleComponent},
    {path: 'addUser', component: ManageUsersComponent},
    {path: 'userlist', component: UserlistComponent},
    {path: 'addAllergies', component: ManageAllergiesComponent},
    {path: 'allergieslist', component: AllergieslistComponent},
    {path: 'addLaboratories', component: ManageLaboratoriesComponent},
    {path: 'laboratorieslist', component: LaboratorieslistComponent},
    {path: 'metadatalist', component: MetadataListComponent},
    {path: 'genderlist', component: GenderlistComponent},
    {path: 'addGender', component: AddGendersComponent},
    {path: 'userrolelist', component: UserRoleListComponent},
    {path: '##/kpportal', component: ClientPortalListComponent},
    {path: 'userlist', component: UserlistComponent},
    {path: 'addPharmacies', component: ManagePharmaciesComponent},
    {path: 'pharmacieslist', component: PharmacieslistComponent},
    {path: 'maritalstatuslist', component: MaritalStatuslistComponent},
    {path: 'cportal', component: ClientPortalListComponent},
    {path: '##/cportald', component: ClientPortalDetailComponent},
<<<<<<< HEAD
    {path: 'religion', component: AddReligionComponent}
=======
    {path: 'addmaritalstatus', component: AddMaritalstatusComponent},
>>>>>>> a7458218f357857ca5d740dabd4dfec8128be7f5
]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
