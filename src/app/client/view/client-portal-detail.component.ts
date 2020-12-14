import { Component, OnInit, ViewChild,AfterViewInit,Input } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { ClientPortalListComponent } from './client.portal.list.component';

@Component({
  selector: 'app-client-portal-detail',
  templateUrl: './client-portal-detail.component.html',
  styleUrls: ['./client-portal-detail.component.scss']
})

export class ClientPortalDetailComponent implements OnInit, AfterViewInit {
  //@ViewChild(ClientPortalListComponent) cpl;
  @Input() papi: number; 
  constructor(private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Client Portal Record', routerLink: ['/cportal'] },
      { label: 'Client Portal Detail', routerLink: ['/##/cportald'] }
       ]);
  }

  ngOnInit(): void {
   console.log("Got here as "+this.papi);
  }

  ngAfterViewInit(){
    console.log("Got here asxx "+this.papi);
   // this.testm = this.cpl.testd;
  //  console.log("Got here asx "+this.cpl);

  }

}
