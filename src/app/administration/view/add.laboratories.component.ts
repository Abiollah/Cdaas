import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { LaboratoriesData, LaboratoriesDataCreate } from '../domain/laboratories.data';
import {ManageLaboratoriesService} from '../service/manage.laboratories.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add.laboratories',
  templateUrl: './add.laboratories.component.html',
  providers: [MessageService]
})
export class ManageLaboratoriesComponent implements OnInit {

  laboratoriescreatedata: LaboratoriesData = {
    facility_id:0,
    name: '',
    code: '',
    description: '',
    contact_phone_number: '',
    created_by: '',
    
  };


  constructor(private messageService: MessageService, private location: Location, private managelaboratoriesService:ManageLaboratoriesService, private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-Data', routerLink: ['/metadata'] },
      { label: 'Add Laboratories', routerLink: ['/addLaboratories'] }    ]);
  }

  ngOnInit(): void {
  }

  addLaboratories(){
  
    this.managelaboratoriesService.createUpdateLaboratories(this.laboratoriescreatedata).subscribe(
      response => {console.log(response);
        this.addSuccess("Success!","Laboratories added successfully");
        
    }, 
    error => {console.log(error)});
    this.addError("Failed!","Laboratories creation failed.");
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
