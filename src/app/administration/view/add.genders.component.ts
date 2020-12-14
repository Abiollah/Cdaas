import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { GenderData, GenderDataCreate } from '../domain/gender.data';
import {ManageGendersService} from '../service/manage.genders.service';
import { GenderlistComponent } from '../view/genderlist.component';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add.genders',
  templateUrl: './add.genders.component.html',
  providers: [MessageService]
})

export class AddGendersComponent implements OnInit {

  

  gendercreatedata: GenderData = {
    name: '',
    description: '',
    gender_id: 0,
    code: '',
    created_by: 0,
   // created_date: null
    
  };


    constructor(private messageService: MessageService,private location: Location,private managegenderService:ManageGendersService, private breadcrumbService: AppBreadcrumbService) { 
      this.breadcrumbService.setItems([
        { label: 'Dashboard', routerLink: ['/dashboard'] },
        { label: 'METADATA', routerLink: ['/metadata'] },
        { label: 'GENDER', routerLink: ['/gender'] }    ]);
    }
  
    ngOnInit(): void {
      
    }
  
  addGender(){
  this.gendercreatedata.created_by = +sessionStorage.getItem('userid');
  //this.gendercreatedata.created_date= new Date();
  this.managegenderService.createGender(this.gendercreatedata).subscribe(
    data => {
      this.addSuccess("Success!","Gender added successfully.");
  }, 
  error => {
  this.addError("Failed!","Could not add gender.");
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
  
