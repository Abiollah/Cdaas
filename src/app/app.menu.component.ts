import { Component, OnInit } from '@angular/core';
import {AppComponent} from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  FontAwesomeModule: any[];

  constructor(public app: AppComponent) {

   }

  ngOnInit() {
    this.model = [

      {
          label: 'Main Navigation', icon: 'pi pi-fw pi-home',
          items: [
              {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard']}
          ]
      },
      {
          label: 'Upload', icon: 'fa fa-user-md fa-5x', routerLink: ['/uikit'],
          items: [
              {label: 'Submit Report', icon: 'pi pi-fw pi-user-plus', routerLink: ['/upload']},
              {label: 'Submit Report 2', icon: 'pi pi-fw pi-user-plus', routerLink: ['/upload2']},
              {label: 'MMO form', icon: 'pi pi-fw pi-user-plus', routerLink: ['/mmoForm']},
          ]
      },

      {
          label: 'Analysis', icon: 'fa fa-stethoscope fa-5x', routerLink: ['utilities'],
          items: [
              {label: 'Report', icon: 'pi pi-fw pi-chart-bar', routerLink: ['utilities/display']},
              {label: 'Analyse Data', icon: 'fa fa-thermometer fa-5x', routerLink: ['utilities/elevation']},
              {label: 'Power Bi', icon: 'pi pi-fw pi-briefcase', routerLink: ['utilities/flexbox']}
          ]
      },
    {
      label: 'Administration', icon: 'pi pi-fw pi-users', routerLink: ['/pages'],
      items: [

          {label: 'Metadata', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/metadatalist']},
          {label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: ['/setting']},
          {label: 'Support', icon: 'pi pi-fw pi-thumbs-up', routerLink: ['/login']}
      ]
  },
  {
    label: 'Settings', icon: 'fa fa-plus fa-5x', routerLink: ['/pages'],

    items: [
        {label: 'Settings', icon: 'fa fa-stethoscope fa-5x', routerLink: ['/pages/crud'] }
    ]
},


  ];
}


}
