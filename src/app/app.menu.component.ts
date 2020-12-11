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
          label: 'Patient', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
          items: [
              {label: 'Register KP', icon: 'pi pi-fw pi-id-card', routerLink: ['/registration']},
              {label: 'Initiate Appointment', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
              {label: 'Visit History', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel']},
              {label: 'KP Portal', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'}
          ]
      },
      {
          label: 'Laboratory', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'],
          items: [
              {label: 'Stats', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']},
              {label: 'Lab Tests', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']},
              {label: 'Report', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']}
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
          {label: 'Settings', icon: 'pi pi-fw pi-pencil', routerLink: ['/setting']},
          {label: 'Metadata', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/metadatalist']},
          {label: 'Interoperability', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'},
          {label: 'Support', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login']}
      ]
  }


  ];
}


}
