import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { NationalityData } from '../domain/nationality.data';
import {ManageNationalityService} from '../service/manage.nationality.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add.nationality',
  templateUrl: './add.nationality.component.html',
  providers: [MessageService]
})
export class ManageNationalityComponent implements OnInit {
  nationality = {} as NationalityData;


    constructor(private messageService: MessageService,private router: Router,
      private location: Location,private managenationalityService:ManageNationalityService, 
      private breadcrumbService: AppBreadcrumbService) { 
      this.breadcrumbService.setItems([
        { label: 'Dashboard', routerLink: ['/dashboard'] },
        { label: 'METADATA', routerLink: ['/metadatalist'] },
        { label: 'Nationality List', routerLink: ['/nationalitylist'] }    ]);
    }
  
    ngOnInit(): void {
      if(sessionStorage.getItem('username') == null){
        this.addError("Session Expired.","Your current session has expired. Re-login.");
        this.router.navigate(['']);
      }
    }
  
  addNationality(){
  this.nationality.created_by = +sessionStorage.getItem('userid');
  this.nationality.created_date= new Date();
  this.managenationalityService.createNationality(this.nationality).subscribe(
  data => {
      this.addSuccess("Success!","Nationality added successfully.");
  }, 
  error => {
  this.addError("Failed!","Could not add Nationality.");
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
  


