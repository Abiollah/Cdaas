import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { PharmaciesData, PharmaciesDataCreate } from '../domain/pharmacies.data';
import {ManagePharmaciesService} from '../service/manage.pharmacies.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-add.pharmacies',
  templateUrl: './add.pharmacies.component.html',
  providers: [MessageService]
})
export class ManagePharmaciesComponent implements OnInit {
  pharmaciescreatedata: PharmaciesData = {
    pharmacy_id:0,
    name: '',
    code: '',
    description: '',
    contact_phone_number: '',
    created_by: '',
    
  };

  constructor(private messageService: MessageService, private location: Location, private managephamaciesService:ManagePharmaciesService, private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-Data', routerLink: ['/metadata'] },
      { label: 'Add Pharmacies', routerLink: ['/addPharmacies'] }    ]);
  }

  ngOnInit(): void {
  }

  addPharmacies(){
  
    this.managephamaciesService.createPhamacies(this.pharmaciescreatedata).subscribe(
      response => {console.log(response);
        this.addSuccess("Success!","Pharmacies added successfully");
        
    }, 
    error => {console.log(error)});
    this.addError("Failed!","Pharmacies creation failed.");
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
