import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { NationalityData, NationalityDataCreate } from '../domain/nationality.data';
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
  nationalitycreatedata: NationalityData = {
  nationality_id:0,
  name: '',
  code: '',
  description: '',
  created_by:0,
  created_date: 0,

  };


  constructor(private router: Router,private messageService: MessageService,private location: Location,private managenationalityService:ManageNationalityService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Nationality', routerLink: ['/addNationalitylist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

addNationality(){
  this.nationalitycreatedata.created_by = +sessionStorage.getItem("userid");
  this.nationalitycreatedata.created_date = Date.now();
  this.managenationalityService.createUpdateNationality(this.nationalitycreatedata).subscribe(
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
  


