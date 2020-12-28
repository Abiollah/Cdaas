import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { PregnancyData } from '../domain/pregnancy.data';
import {ManagePregnancyService} from '../service/manage.pregnancy.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-pregnancylist',
  templateUrl: './pregnancylist.component.html',
  providers: [MessageService]
})
export class PregnancylistComponent implements OnInit {
  pregnancyList:any;
  selectedPregnancy: PregnancyData;
  pregnancyDialog: boolean;

  constructor(private messageService: MessageService,private router: Router,private location: Location,private managepregnancyService:ManagePregnancyService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Pregnancy', routerLink: ['/pregnancylist'] }    ]);
   }

  ngOnInit(): void {
    this.PregnancyList();
  }

  PregnancyList():void{
    this.managepregnancyService.getPregnancys().subscribe(data => {
      this.pregnancyList = data;
      console.log(data);
    }
    );
    }


    goToAddPregnancy(){
      this.router.navigate(['/addPregnancy']);
    }
    goBack(){
      this.location.back();
    }
    editPregnancy(pregnancy: PregnancyData){
    this.selectedPregnancy = {...pregnancy};
    this.pregnancyDialog=true;
   }
   updatePregnancy(){
     this.managepregnancyService.createUpdatePregnancy(this.selectedPregnancy).subscribe(
      () => {
        this.addSuccess("Success!","Pregnancy information updated successfully.");
           
     }, 
     () => {
     this.addError("Failed!","Pregnancy creation failed.");
     this.pregnancyDialog = false;
   });
  }

   addSuccess(title:string,message:string) {
     this.messageService.add({severity:'success', summary:title, detail:message});
     
   
   }
   addError(title:string,message:string) {
     this.messageService.add({severity:'error', summary:title, detail:message});
     
   }

   hideUserDialog(){
     this.pregnancyDialog = false;
   }

}

