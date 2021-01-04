import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { TargetGroupData, TargetGroupDataCreate } from '../domain/targetgroup.data';
import {ManageTargetgroupService} from '../service/manage.targetgroup.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { OccupationData } from '../domain/occupation.data';

@Component({
  selector: 'app-add.targetgroup',
  templateUrl: './add.targetgroup.component.html',
  styleUrls: ['./add.targetgroup.component.scss'],
  providers: [MessageService]
})
export class ManageTargetgroupComponent implements OnInit {
  targetgroupcreatedata = {} as TargetGroupData;

  occupationdata = {} as OccupationData;

  constructor(private router: Router,private messageService: MessageService,private location: Location,private managetargetgroupService:ManageTargetgroupService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Target-Group', routerLink: ['/addTargetgrouplist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

  addTargetgroup(){
    this.targetgroupcreatedata.created_by = +sessionStorage.getItem("userid");
    this.targetgroupcreatedata.created_date = new Date();
    this.managetargetgroupService.createUpdateTargetgroup(this.targetgroupcreatedata).subscribe(
      data => {
        this.addSuccess("Success!","Target-Group added successfully.");
    }, 
    error => {
    this.addError("Failed!","Could not add Target-Group.");
    }
    
    );
  }

  goBack(){
    this.location.back();
    }
    
    addSuccess(title:string,message:string) {
      this.messageService.add({severity:'success', summary:title, detail:message});
      
    
    }
    addError(title:string,message:string) {
      this.messageService.add({severity:'error', summary:title, detail:message});
      
    }
    

}
