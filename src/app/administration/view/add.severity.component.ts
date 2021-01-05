import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { SeverityData } from '../domain/severity.data';
import {ManageSeverityService} from '../service/manage.severity.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add.severity',
  templateUrl: './add.severity.component.html',
  styleUrls: ['./add.severity.component.scss']
})
export class ManageSeverityComponent implements OnInit {

  severitycreatedata = {} as SeverityData;

  

  constructor(private router: Router,private messageService: MessageService,private location: Location,private manageseverityService:ManageSeverityService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Severity', routerLink: ['/addSeveritylist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

addSeverity(){
  this.severitycreatedata.created_by = +sessionStorage.getItem("userid");
  this.severitycreatedata.created_date = new Date();
  this.manageseverityService.createUpdateSeverity(this.severitycreatedata).subscribe(
    data => {
      this.addSuccess("Success!","Severity added successfully.");
  }, 
  error => {
  this.addError("Failed!","Could not add Severity.");
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
  

