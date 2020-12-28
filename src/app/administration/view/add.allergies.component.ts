import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { AllergiesData, AllergiesDataCreate } from '../domain/allergies.data';
import {ManageAllergiesService} from '../service/manage.allergies.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-manage-allergies',
  templateUrl: './add.allergies.component.html',
  providers: [MessageService]
  
})
export class ManageAllergiesComponent implements OnInit {
  

allergiescreatedata = {} as AllergiesData;

  

  constructor(private router: Router,private messageService: MessageService,private location: Location,private manageallergiesService:ManageAllergiesService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Allergies', routerLink: ['/addAllergieslist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

addAllergies(){
  this.allergiescreatedata.created_by = +sessionStorage.getItem("userid");
  this.allergiescreatedata.created_date = Date.now();
  this.manageallergiesService.createUpdateAllergies(this.allergiescreatedata).subscribe(
    data => {
      this.addSuccess("Success!","Allergy added successfully.");
  }, 
  error => {
  this.addError("Failed!","Could not add Allergy.");
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
  
