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


  constructor(private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Administration', routerLink: ['/administration'] },
      { label: 'Metadata', routerLink: ['/metadata'] }
  ]);
  }

  ngOnInit() {
    this.demographicInfoManagement = [
      {
          items: [
              {
                  label: 'Add/Manage Genders',
                  icon: 'pi pi-fw pi-plus',
                  routerLink: '/genderlist'
              },
              {
                  label: 'Add/Manage Marital Status',
                  icon: 'pi pi-fw pi-user-edit',
                  routerLink: '/maritalstatus'
              },
              {
                  label: 'Add/Manage Relationships',
                  icon: 'pi pi-fw pi-user-edit',
                  routerLink: '/relationship'
              },
              {
                  label: 'Add/Manage Language',
                  icon: 'pi pi-fw pi-user-edit',
                  routerLink: '/language'
              },
              {
                  label: 'Add/Manage Occupation',
                  icon: 'pi pi-fw pi-user-edit',
                  routerLink: '/occupation'
              },
              {
                  label: 'Add/Manage Qualification',
                  icon: 'pi pi-fw pi-user-edit',
                  routerLink: '/qualification'
              },
              {
                  label: 'Add/Manage Religion',
                  icon: 'pi pi-fw pi-user-edit',
                  routerLink: '/religion'
              },
              {
                  label: 'Add/Manage Next of Kin',
                  icon: 'pi pi-fw pi-user-edit',
                  routerLink: '/nextofkin'
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
                routerLink: '/heirarchy'
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
              label: 'Add/Manage Laboratories',
              icon: 'pi pi-fw pi-user-edit',
              routerLink: '/laboratorieslist'
          },
          {
              label: 'Add/Manage Pharmacies',
              icon: 'pi pi-fw pi-user-edit',
              routerLink: '/pharmacieslist'
          }
      ]
  },
  
];
  }

}
