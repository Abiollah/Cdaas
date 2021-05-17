import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import {UserLoginComponent} from './login/login.component';
import { DashboardComponent } from './report/view/dashboard.component';
import { ClientRegistrationComponent } from './client/view/client.registration.component';
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
import { AddOccupationComponent } from './administration/view/add-occupation.component';
import { ManagePharmaciesComponent } from './administration/view/add.pharmacies.component';
import { PharmacieslistComponent } from './administration/view/pharmacieslist.component';
import {ClientPortalListComponent} from './client/view/client.portal.list.component';
import {UserRoleListComponent} from './administration/view/user-role-list.component';
import {AuthGuardService} from './administration/service/auth-guard.service';
import { MaritalStatuslistComponent } from './administration/view/marital-statuslist.component';
import { AddMaritalstatusComponent } from './administration/view/add.maritalstatus.component';
import { ClientPortalDetailComponent } from './client/view/client-portal-detail.component';
import { ManageQualificationComponent } from './administration/view/add.qualification.component';
import { QualificationlistComponent } from './administration/view/qualificationlist.component';
import { ManageLanguageComponent } from './administration/view/add.language.component';
import { LanguagelistComponent } from './administration/view/languagelist.component';
import { ManageNationalityComponent } from './administration/view/add.nationality.component';
import { NationalitylistComponent } from './administration/view/nationalitylist.component';
import { ManageTargetgroupComponent } from './administration/view/add.targetgroup.component';
import { TargetgrouplistComponent } from './administration/view/targetgrouplist.component';
import { OccupationlistComponent } from './administration/view/occupationlist.component';
import { ClientServiceDashboardComponent } from './client/view/client-service-dashboard.component';
import { ManageRefferedfromComponent } from './administration/view/add.refferedfrom.component';
import { RefferedfromlistComponent } from './administration/view/refferedfromlist.component';
import { ManagePregnancyComponent } from './administration/view/add.pregnancy.component';
import { PregnancylistComponent } from './administration/view/pregnancylist.component';
import { ManageEnrollmentsettingComponent } from './administration/view/add.enrollmentsetting.component';
import { EnrollmentsettinglistComponent } from './administration/view/enrollmentsettinglist.component';
import { ManageHivstatusatregistrationComponent } from './administration/view/add.hivstatusatregistration.component';
import { HivStatusAtRegistrationlistComponent } from './administration/view/hivstatusatregistrationlist.component';
import { ManageCareentrypointComponent } from './administration/view/add.careentrypoint.component';
import { CareentrypointlistComponent } from './administration/view/careentrypointlist.component';
import { ManageSeverityComponent } from './administration/view/add.severity.component';
import { SeveritylistComponent } from './administration/view/severitylist.component';
import { HeirarchylistComponent } from './administration/view/heirarchylist.component';
import { AddHeirarchyComponent } from './administration/view/add-heirarchy.component';
import { TesttypelistComponent } from './administration/view/testtypelist.component';
import { AddTesttypeComponent } from './administration/view/add-testtype.component';
import { ManageTbstatusComponent } from './administration/view/add.tbstatus.component';
import { TbstatuslistComponent } from './administration/view/tbstatuslist.component';
import { ManagePriorityComponent } from './administration/view/add.priority.component';
import { PrioritylistComponent } from './administration/view/prioritylist.component';
import { ManageAllergensComponent } from './administration/view/add.allergens.component';
import { AllergenslistComponent } from './administration/view/allergenslist.component';
import { ManageTestComponent } from './administration/view/add.test.component';
import { TestlistComponent } from './administration/view/testlist.component';
import { ManageStatusComponent } from './administration/view/add.status.component';
import { StatuslistComponent } from './administration/view/statuslist.component'


//import { ManageTestgroupComponent } from './administration/view/add.testgroup.component';
//import { TestgrouplistComponent } from './administration/view/testgrouplist.component';
import { RelationshiplistComponent } from './administration/view/relationshiplist.component';
//import { ManageAllergensComponent } from './administration/view/add.allergens.component';
//import { AllergenslistComponent } from './administration/view/allergenslist.component';
import { StatustypelistComponent } from './administration/view/statustypelist.component';
import { AddStatustypeComponent } from './administration/view/add-statustype.component';
import { UploadDashboardComponent } from './upload/upload-dashboard.component';
import { Upload2Component } from './upload/upload2.component';
import { MmoFormComponent } from './upload/mmo-form.component';







const routes: Routes = [
    {path: '', component: UserLoginComponent},
    {path: '', component: AppMainComponent,
    children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'registration2', component: ClientRegistrationComponent},
    {path: 'upload', component: UploadDashboardComponent},
    {path: 'upload2', component: Upload2Component},
    {path: 'mmoForm', component: MmoFormComponent},
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
    {path: 'addOccupation', component: AddOccupationComponent},
    {path: 'userrolelist', component: UserRoleListComponent},
    {path: '##/kpportal', component: ClientPortalListComponent},
    {path: 'userlist', component: UserlistComponent},
    {path: 'addPharmacies', component: ManagePharmaciesComponent},
    {path: 'pharmacieslist', component: PharmacieslistComponent},
    {path: 'maritalstatuslist', component: MaritalStatuslistComponent},
    {path: 'cportal', component: ClientPortalListComponent},
    {path: '##/cportald', component: ClientPortalDetailComponent},
    {path: 'addmaritalstatus', component: AddMaritalstatusComponent},
    {path: 'religion', component: AddReligionComponent},
    {path: 'addmaritalstatus', component: AddMaritalstatusComponent},
    {path: 'addQualification', component: ManageQualificationComponent},
    {path: 'qualificationlist', component: QualificationlistComponent},
    {path: 'addLanguage', component: ManageLanguageComponent},
    {path: 'languagelist', component: LanguagelistComponent},
    {path: 'addNationality', component: ManageNationalityComponent},
    {path: 'nationalitylist', component: NationalitylistComponent},
    {path: 'addTargetgroup', component: ManageTargetgroupComponent},
    {path: 'targetgrouplist', component: TargetgrouplistComponent},
    {path: 'occupationlist', component: OccupationlistComponent},
    {path: '##/sportal', component: ClientServiceDashboardComponent},
    {path: 'addRefferedfrom', component: ManageRefferedfromComponent},
    {path: 'refferedfromlist', component: RefferedfromlistComponent},
    {path: 'addPregnancy', component: ManagePregnancyComponent},
    {path: 'pregnancylist', component: PregnancylistComponent},
    {path: 'addEnrollmentSetting', component: ManageEnrollmentsettingComponent},
    {path: 'enrollmensettingtlist', component: EnrollmentsettinglistComponent},
    {path: 'addHivstatusatregistration', component: ManageHivstatusatregistrationComponent},
    {path: 'hivstatusatregistrationlist', component: HivStatusAtRegistrationlistComponent},
    {path: 'addCareentrypoint', component: ManageCareentrypointComponent},
    {path: 'careentrypointlist', component: CareentrypointlistComponent},
    {path: 'addSeverity', component: ManageSeverityComponent},
    {path: 'severitylist', component: SeveritylistComponent},
    {path: 'heirarchylist', component: HeirarchylistComponent },
    {path: 'addHeirarchy', component: AddHeirarchyComponent },
    {path: 'testtypelist', component: TesttypelistComponent },
    { path: 'addtesttype', component: AddTesttypeComponent },
    {path: 'addTbstatus', component: ManageTbstatusComponent},
    {path: 'tbstatuslist', component: TbstatuslistComponent},
    {path: 'addPriority', component: ManagePriorityComponent},
    {path: 'prioritylist', component: PrioritylistComponent},
    {path: 'addAllergens', component: ManageAllergensComponent},
    {path: 'allergenslist', component: AllergenslistComponent},
    {path: 'addTest', component: ManageTestComponent},
    {path: 'testlist', component: TestlistComponent},
    {path: 'addStatus', component: ManageStatusComponent},
    {path: 'statuslist', component: StatuslistComponent},


    //{path: 'addTestgroup', component: ManageTestgroupComponent},
    //{path: 'testgrouplist', component: TestgrouplistComponent},
    {path: 'relationshiplist', component: RelationshiplistComponent},
    //{path: 'addAllergens', component: ManageAllergensComponent},
    //{path: 'allergenslist', component: AllergenslistComponent},
    {path: 'statustypelist', component: StatustypelistComponent},
    {path: 'addStatustype', component: AddStatustypeComponent}



]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
