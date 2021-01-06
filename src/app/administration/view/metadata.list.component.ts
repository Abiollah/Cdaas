import { Component, OnInit } from '@angular/core';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';

@Component({
  selector: 'app-metadata.list',
  templateUrl: './metadata.list.component.html',
  styleUrls: ['./metadata.list.component.scss']
})
export class MetadataListComponent implements OnInit {


  breadcrumbItems: MenuItem[];
  demographicInfoManagement: MenuItem[];
  organisationUnitsManagement: MenuItem[];
  clinicalManagement: MenuItem[];
  hivEnrollment: MenuItem[];


  constructor(private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Administration', routerLink: ['/administration'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] }
  ]);
  }

  ngOnInit() {
    this.demographicInfoManagement = [
        {
            label: 'Personal Information',
            items: [
                {
                    label: 'Add/Manage Genders',
                    icon: 'pi pi-fw pi-plus',
                    routerLink: '/genderlist'
                },
                {
                    label: 'Add/Manage Marital Status',
                    icon: 'pi pi-fw pi-user-edit',
                    routerLink: '/maritalstatuslist'
                },{
                    label: 'Add/Manage Relationships',
                    icon: 'pi pi-fw pi-user-edit',
                    routerLink: '/relationship'
                },
                {
                    label: 'Add/Manage Language',
                    icon: 'pi pi-fw pi-user-edit',
                    routerLink: '/languagelist'
                },
                {
                    label: 'Add/Manage Occupation',
                    icon: 'pi pi-fw pi-user-edit',
                    routerLink: '/occupationlist'
                },{
                    label: 'Add/Manage Qualification',
                    icon: 'pi pi-fw pi-user-edit',
                    routerLink: '/qualificationlist'
                },
                {
                    label: 'Add/Manage Religion',
                    icon: 'pi pi-fw pi-user-edit',
                    routerLink: '/religionlist'
                },
                {
                    label: 'Add/Manage Next of Kin',
                    icon: 'pi pi-fw pi-user-edit',
                    routerLink: '/nextofkinlist'
                }
            ]
        },
        {
            label: 'Geography / Location',
                items: [
                    {
                        label: 'Add/Manage Nationality',
                        icon: 'pi pi-fw pi-user-edit',
                        routerLink: '/nationalitylist'
                    },
                    {
                        label: 'Add/Manage State of Origin',
                        icon: 'pi pi-fw pi-user-edit',
                        routerLink: '/stateoforiginlist'
                    },
                    {
                        label: 'Add/Manage Local Government Area',
                        icon: 'pi pi-fw pi-user-edit',
                        routerLink: '/localgovernmentarealist'
                    }

                ]
        },

    ];


    this.hivEnrollment = [
            { 
                label:'Hiv Enrollment',
                items:[
                    {
                label: 'Add/Manage Target Group',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/targetgrouplist'
            },
            {
                label: 'Add/Manage Care Entry Point',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/careentrypointlist'
            },
            {
                label: 'Add/Manage Hiv Status At Registration',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/hivstatusatregistrationlist'
            },
            {
                label: 'Add/Manage Reffered From',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/refferedfromlist'
            },
            {
                label: 'Add/Manage Pregnancy',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/pregnancylist'
            },
            {
                label: 'Add/Manage TB Status',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/tbstatuslist'
            },
            {
                label: 'Add/Manage Enrollment Setting',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/enrollmensettingtlist'
            }
          ]
      },
  ];
  this.organisationUnitsManagement = [
    {
        items: [
            {
                label: 'Add/Manage Heirarchy',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/heirarchylist'
            },
            {
                label: 'Add/Manage Heirarchy Units',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/heirarchyunits'
            },
            {
                label: 'Add/Manage Heirarchy Groups',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/heirarchygroups'
            },
            {
                label: 'Add/Manage Referred From',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/referredfromlist'
            },
            {
                label: 'Add/Manage Facility Name',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/facilitynamelist'
            },
            {
                label: 'Add/Manage Facility Type',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: '/facilitytypelist'
            }
        ]
    },
];
this.clinicalManagement = [
  {
      items: [
          {
              label: 'Add/Manage Allergies',
              icon: 'pi pi-fw pi-plus',
              routerLink: '/allergieslist'
          },
          {
            label: 'Add/Manage Allergens',
            icon: 'pi pi-fw pi-user-edit',
            routerLink: '/allergenslist'
        },
          {
              label: 'Add/Manage Laboratories',
              icon: 'pi pi-fw pi-user-edit',
              routerLink: '/laboratorieslist'
          },
          {
              label: 'Add/Manage Pharmacies',
              icon: 'pi pi-fw pi-user-edit',
              routerLink: '/pharmacieslist'
          },
          {
            label: 'Add/Manage Test',
            icon: 'pi pi-fw pi-user-edit',
            routerLink: '/testlist'
        },
        {
            label: 'Add/Manage Test Group',
            icon: 'pi pi-fw pi-user-edit',
            routerLink: '/testgrouplist'
        },
        {
            label: 'Add/Manage Severity',
            icon: 'pi pi-fw pi-user-edit',
            routerLink: '/severitylist'
        }
      ]
  },

];
  }

}
