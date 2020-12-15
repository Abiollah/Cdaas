import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { MaritalStatusData, MaritalStatusDataCreate } from '../domain/maritalstatus.data';
import {ManageMaritalstatusService} from '../service/manage.maritalstatus.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';

@Component({
  selector: 'app-marital-statuslist',
  templateUrl: './marital-statuslist.component.html',
  styleUrls: ['./marital-statuslist.component.scss'],
  providers: [MessageService]
})

export class MaritalStatuslistComponent implements OnInit {
  maritalStatusList:any;
  constructor(private router: Router, private location: Location, private manageMaritalstatusService:ManageMaritalstatusService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'metadata', routerLink: ['/metadatalist'] },
      { label: 'maritalstatus', routerLink: ['/maritalstatuslist'] }    ]);
   }

  ngOnInit(): void {
    this.MaritalStatusList();
  }
  MaritalStatusList():void{
    this.manageMaritalstatusService.getMaritalStatuss().subscribe(data => {
      this.maritalStatusList = data;
      console.log(data);
    }
    );
    }

    goToAddMaritalStatus(){
      this.router.navigate(['addmaritalstatus']);
    }

    goBack(){
      this.location.back();
    }

}
