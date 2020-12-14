import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { AllergiesData, AllergiesDataCreate } from '../domain/allergies.data';
import {ManageAllergiesService} from '../service/manage.allergies.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add.allergies',
  templateUrl: './add.allergies.component.html',
  providers: [MessageService]
})
export class ManageAllergiesComponent implements OnInit {

  allergiescreatedata: AllergiesData = {
    allergies_id:0,
    name: '',
    code: '',
    description: '',
    
    
  };

  constructor(private messageService: MessageService, private location: Location, private manageallergiesService:ManageAllergiesService, private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-Data', routerLink: ['/metadata'] },
      { label: 'Add Allergies', routerLink: ['/addAllergies'] }    ]);
  }

  ngOnInit(): void {
  }

  addAllergies(){



    this.manageallergiesService.createUpdateAllergies(this.allergiescreatedata).subscribe(
      response => {console.log(response);
        this.addSuccess("Success!","Allergies added successfully");
        
    }, 
    error => {console.log(error)});
    this.addError("Failed!","Allergies creation failed.");
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
