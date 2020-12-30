import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { QualificationData } from '../domain/qualification.data';
import {ManageQualificationService} from '../service/manage.qualification.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-qualificationlist',
  templateUrl: './qualificationlist.component.html',
  providers: [MessageService]
})
export class QualificationlistComponent implements OnInit {
  qualificationList:any;
  selectedQualification: QualificationData;
  qualificationDialog: boolean;


  constructor(private messageService: MessageService,private router: Router,private location: Location,private managequalificationService:ManageQualificationService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Qualification', routerLink: ['/qualificationlist'] }    ]);
   }

  ngOnInit(): void {
    this.QualificationList();
  }

  QualificationList():void{
    this.managequalificationService.getQualifications().subscribe(data => {
      this.qualificationList = data;
      console.log(data);
    }
    );
    }


    goToAddQualification(){
      this.router.navigate(['/addQualification']);
    }
    goBack(){
      this.location.back();
    }
    editQualification(qualification: QualificationData){
    this.selectedQualification = {...qualification};
    this.qualificationDialog=true;
   }
   updateQualification(){
     this.managequalificationService.createUpdateQualification(this.selectedQualification).subscribe(
      () => {
        this.addSuccess("Success!","Qualification information updated successfully.");
           
     }, 
     () => {
     this.addError("Failed!","Qualification creation failed.");
     this.qualificationDialog = false;
   });
  }

   addSuccess(title:string,message:string) {
     this.messageService.add({severity:'success', summary:title, detail:message});
     
   
   }
   addError(title:string,message:string) {
     this.messageService.add({severity:'error', summary:title, detail:message});
     
   }

   hideUserDialog(){
     this.qualificationDialog = false;
   }

}
