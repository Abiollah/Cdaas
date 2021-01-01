import { Component, OnInit,Input } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { ClientPortalListComponent } from './client.portal.list.component';
import {ClientPortalService} from '../service/client.portal.service';
import { ClientExtendedInfo } from '../domain/client.portal.data';

@Component({
  selector: 'app-client-portal-detail',
  templateUrl: './client-portal-detail.component.html'
})

export class ClientPortalDetailComponent implements OnInit {
  viewedClient: ClientExtendedInfo;
  constructor(private breadcrumbService: AppBreadcrumbService, 
    private clientPortalService:ClientPortalService) { 
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Client Portal Record', routerLink: ['/cportal'] },
      { label: 'Client Portal Detail', routerLink: ['/##/cportald'] }
       ]);
  }

  ngOnInit(): void {
    this.viewedClient = this.clientPortalService.selectedClients;
   //console.log("Got here as "+this.clientPortalService.selectedClients.hospitalNum);
  }

 

  

}
