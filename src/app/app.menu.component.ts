import { Component, OnInit } from '@angular/core';
import {AppComponent} from './app.component';

@Component({
  selector: 'app-menu',
  template: `
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {
  model: any[];

  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.model = [
      {
          label: 'Main Navigation', icon: 'pi pi-fw pi-home',
          items: [
              {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard']}
          ]
      },
      {
          label: 'Patient', icon: 'fa fa-user-md fa-5x', routerLink: ['/uikit'],
          items: [
              {label: 'Register KP', icon: 'pi pi-fw pi-user-plus', routerLink: ['/registration']},
              {label: 'Initiate Appointment', icon: 'fa fa-medkit fa-5x', routerLink: ['/uikit/input']},
              {label: 'Visit History', icon: 'fa fa-ambulance fa-5x', routerLink: ['/uikit/floatlabel']},
              {label: 'KP Portal', icon: 'fa fa-heartbeat fa-5x', routerLink: ['/uikit/button'], }
          ]
      },

      {
          label: 'Laboratory', icon: 'fa fa-stethoscope fa-5x', routerLink: ['utilities'],
          items: [
              {label: 'Stats', icon: 'pi pi-fw pi-chart-bar', routerLink: ['utilities/display']},
              {label: 'Lab Tests', icon: 'fa fa-lungs-virus fa-5x', routerLink: ['utilities/elevation']},
              {label: 'Report', icon: 'fa fa-book-medical fa-5x', routerLink: ['utilities/flexbox']}
          ]
      },
      {
          label: 'Pharmacy', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages'],
          items: [
              {label: 'Stats', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
              {label: 'Prescription', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
              {label: 'Report', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'}
          ]
      },
      {
        label: 'Report', icon: 'pi pi-fw pi-list', routerLink: ['/pages'],
        items: [
            {label: 'Patient Report', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
            {label: 'Clinical Report', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
            {label: 'Pharmacy Report', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'},
            {label: 'Laboratory Report', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login']}
        ]
    },
    {
      label: 'Administration', icon: 'pi pi-fw pi-clone', routerLink: ['/pages'],
      items: [
          {label: 'Settings', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
          {label: 'Metadata', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
          {label: 'Interoperability', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'},
          {label: 'Support', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login']}
      ]
  }


  ];
}


}
