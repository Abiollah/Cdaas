import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './login/login.component';
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { AppTopBarComponent } from './app.topbar.component';
import { AppRightPanelComponent } from './app.rightpanel.component';
import { AppMenuItemComponent } from './app.menuitem.component';
import { AppMenuComponent } from './app.menu.component';
import { AppConfigComponent } from './app.config.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppFooterComponent } from './app.footer.component';
import { AppMainComponent } from './app.main.component';
import { DashboardComponent } from './report/view/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { SettingListComponent } from './administration/view/setting.list.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserRoleComponent } from './administration/view/add.user.role.component';
import {ManageUsersComponent} from './administration/view/add.users.component';
import { UserlistComponent } from './administration/view/userlist.component';
import { ManageAllergiesComponent } from './administration/view/add.allergies.component';
import { AllergieslistComponent } from './administration/view/allergieslist.component';
import { ManageLaboratoriesComponent } from './administration/view/add.laboratories.component';
import { LaboratorieslistComponent } from './administration/view/laboratorieslist.component';
import { MetadataListComponent } from './administration/view/metadata.list.component';
import { GenderlistComponent } from './administration/view/genderlist.component';
import { AddGendersComponent } from './administration/view/add.genders.component';
import { UserRoleListComponent } from './administration/view/user-role-list.component';
import { ManagePharmaciesComponent } from './administration/view/add.pharmacies.component';
import { PharmacieslistComponent } from './administration/view/pharmacieslist.component';
import { MaritalStatuslistComponent } from './administration/view/marital-statuslist.component';
import { ClientPortalListComponent } from './client/view/client.portal.list.component';
import { ClientPortalDetailComponent } from './client/view/client-portal-detail.component';
import { ClientRegistrationComponent } from './client/view/client.registration.component';
import { OccupationlistComponent } from './administration/view/occupationlist.component';
//import { ManageOccupationComponent } from './administration/view/add.occupation.component';
//import { PatientComponent } from './client/view/patient.registration.component';
import { AddReligionComponent } from './administration/view/add-religion.component';
import { ReligionListComponent } from './administration/view/religion.list.component';
import { AddMaritalstatusComponent } from './administration/view/add.maritalstatus.component';
import { ManageQualificationComponent } from './administration/view/add.qualification.component';
import { QualificationlistComponent } from './administration/view/qualificationlist.component';
import { ManageLanguageComponent } from './administration/view/add.language.component';
import { LanguagelistComponent } from './administration/view/languagelist.component';
import { ManageNationalityComponent } from './administration/view/add.nationality.component';
import { NationalitylistComponent } from './administration/view/nationalitylist.component';
import { ManageTargetgroupComponent } from './administration/view/add.targetgroup.component';
import { TargetgrouplistComponent } from './administration/view/targetgrouplist.component';
import { ClientServiceDashboardComponent } from './client/view/client-service-dashboard.component'
import { ManageRefferedfromComponent } from './administration/view/add.refferedfrom.component';
import { RefferedfromlistComponent } from './administration/view/refferedfromlist.component';
import { ManagePregnancyComponent } from './administration/view/add.pregnancy.component';
import { PregnancylistComponent } from './administration/view/pregnancylist.component';
import { ManageEnrollmentsettingComponent } from './administration/view/add.enrollmentsetting.component';
import { EnrollmentsettinglistComponent } from './administration/view/enrollmentsettinglist.component';
import { ManageCareentrypointComponent } from './administration/view/add.careentrypoint.component';
import { ManageHivstatusatregistrationComponent } from './administration/view/add.hivstatusatregistration.component';
import { CareentrypointlistComponent } from './administration/view/careentrypointlist.component';
import { HivStatusAtRegistrationlistComponent } from './administration/view/hivstatusatregistrationlist.component';
import { ManageSeverityComponent } from './administration/view/add.severity.component';
import { SeveritylistComponent } from './administration/view/severitylist.component';
import { HeirarchylistComponent } from './administration/view/heirarchylist.component';
import { AddHeirarchyComponent } from './administration/view/add-heirarchy.component';
import { ManageTbstatusComponent } from './administration/view/add.tbstatus.component';
import { TbstatuslistComponent } from './administration/view/tbstatuslist.component';
import { ManageTestComponent } from './administration/view/add.test.component';
import { TestlistComponent } from './administration/view/testlist.component';
import { ManageTestgroupComponent } from './administration/view/add.testgroup.component';
import { TestgrouplistComponent } from './administration/view/testgrouplist.component'

//import { PatientComponent } from './client/patient.registration.component';





@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AppTopBarComponent,
    AppRightPanelComponent,
    AppMenuItemComponent,
    AppMenuComponent,
    AppConfigComponent,
    AppBreadcrumbComponent,
    AppFooterComponent,
    AppMainComponent,
    DashboardComponent,
     SettingListComponent,
    AddUserRoleComponent,
    ManageUsersComponent,
    UserlistComponent,
    ManageAllergiesComponent,
    AllergieslistComponent,
    ManageLaboratoriesComponent,
    LaboratorieslistComponent,
    MetadataListComponent,
    GenderlistComponent,
    AddGendersComponent,
    UserRoleListComponent,
    ManagePharmaciesComponent,
    PharmacieslistComponent,
    MaritalStatuslistComponent,
    ClientPortalListComponent,
    ClientPortalDetailComponent,
    AddMaritalstatusComponent,
    ClientRegistrationComponent,
    QualificationlistComponent,
    AddReligionComponent,
    OccupationlistComponent,
    ManageQualificationComponent,
    //PatientComponent,
    AddReligionComponent,
    ReligionListComponent,

   // ManageUserRoleService
    AddMaritalstatusComponent,
    ManageQualificationComponent,
    QualificationlistComponent,
    ManageLanguageComponent,
    LanguagelistComponent,
    ManageNationalityComponent,
    NationalitylistComponent,
    ManageTargetgroupComponent,
    TargetgrouplistComponent,
    ClientServiceDashboardComponent,
    ManageRefferedfromComponent,
    RefferedfromlistComponent,
    ManagePregnancyComponent,
    PregnancylistComponent,
    ManageEnrollmentsettingComponent,
    EnrollmentsettinglistComponent,
    ManageCareentrypointComponent,
    ManageHivstatusatregistrationComponent,
    CareentrypointlistComponent,
    HivStatusAtRegistrationlistComponent,
    ManageSeverityComponent,
    SeveritylistComponent,
    HeirarchylistComponent,
    AddHeirarchyComponent,
    ManageTbstatusComponent,
    TbstatuslistComponent,
    ManageTestComponent,
    TestlistComponent,
    ManageTestgroupComponent,
    TestgrouplistComponent
    
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
        FormsModule,
        AppRoutingModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
       // ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        HttpClientModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        SelectButtonModule,
        SidebarModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        FontAwesomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
