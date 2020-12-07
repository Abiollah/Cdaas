import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { AppMainComponent } from '../../app.main.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Favorites' },
      { label: 'Dashboard', routerLink: ['login'] }
  ]);
  }

  ngOnInit(): void {
  }

}
