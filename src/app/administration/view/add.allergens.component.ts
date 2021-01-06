import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { AllergensData } from '../domain/allergens.data';
import {ManageAllergensService} from '../service/manage.allergens.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-add.allergens',
  templateUrl: './add.allergens.component.html',
  providers: [MessageService]
})
export class ManageAllergensComponent implements OnInit {

  allergenscreatedata = {} as AllergensData;

  

  constructor(private router: Router,private messageService: MessageService,private location: Location,private manageallergensService:ManageAllergensService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Allergens', routerLink: ['/addAllergenslist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

addAllergens(){
  this.allergenscreatedata.created_by = +sessionStorage.getItem("userid");
  this.allergenscreatedata.created_date = new Date();
  this.manageallergensService.createAllergens(this.allergenscreatedata).subscribe(
    data => {
      this.addSuccess("Success!","Allergens added successfully.");
  }, 
  error => {
  this.addError("Failed!","Could not add Allergens.");
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
  
