<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { QualificationData } from '../domain/qualification.data';
import {ManageQualificationService} from '../service/manage.qualification.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add.qualification',
  templateUrl: './add.qualification.component.html',
  providers: [MessageService]
})
export class ManageQualificationComponent implements OnInit {

  qualification = {} as QualificationData;

  constructor(private router: Router,private messageService: MessageService,
    private location: Location,private managequalificationService:ManageQualificationService, 
    private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Qualification List', routerLink: ['/qualificationlist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

addQualification(){
  this.qualification.created_by = +sessionStorage.getItem('userid');
  this.qualification.created_date= new Date();
this.managequalificationService.createQualification(this.qualification).subscribe(
data => {
    this.addSuccess("Success!","Qualifiation added successfully.");
}, 
error => {
this.addError("Failed!","Could not add qualification.");
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
  

=======
import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { QualificationData } from '../domain/qualification.data';
import {ManageQualificationService} from '../service/manage.qualification.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add.qualification',
  templateUrl: './add.qualification.component.html',
  styleUrls: ['./add.qualification.component.scss'],
  providers: [MessageService]
  
})
export class ManageQualificationComponent implements OnInit {
 
  qualificationcreatedata = {} as QualificationData;

  constructor(private router: Router,private messageService: MessageService,private location: Location,private managequalificationService:ManageQualificationService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Qualification', routerLink: ['/addQualificationlist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

  addQualification(){
    this.qualificationcreatedata.created_by = +sessionStorage.getItem("userid");
    //this.qualificationcreatedata.created_date = new Date();
    this.managequalificationService.createUpdateQualification(this.qualificationcreatedata).subscribe(
      () => {
        this.addSuccess("Success!","Qualification added successfully.");
    }, 
    () => {
    this.addError("Failed!","Could not add Qualification.");
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
>>>>>>> 265c9420503ddc683af487c8c5c4da58d0401b19
