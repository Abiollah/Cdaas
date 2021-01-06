import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { RefferedfromData } from '../domain/refferedfrom.data';
import {ManageRefferedfromService} from '../service/manage.refferedfrom.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-refferedfromlist',
  templateUrl: './refferedfromlist.component.html',
  providers: [MessageService]
})
export class RefferedfromlistComponent implements OnInit {
  refferedfromList:any;
  selectedRefferedfrom: RefferedfromData;
  refferedfromDialog: boolean;

  constructor(private messageService: MessageService,private router: Router,private location: Location,private managerefferedfromService:ManageRefferedfromService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'List Reffered From', routerLink: ['/refferedfromlist'] }    ]);
   }

   ngOnInit(): void {
    this.RefferedfromList();
  }

  RefferedfromList():void{
    this.managerefferedfromService.getRefferedfroms().subscribe(data => {
      this.refferedfromList = data;
      console.log(data);
    }
    );
    }


    goToAddRefferedfrom(){
      this.router.navigate(['/addRefferedfrom']);
    }
    goBack(){
      this.location.back();
    }
    editRefferedfrom(refferedfrom: RefferedfromData){
    this.selectedRefferedfrom = {...refferedfrom};
    this.refferedfromDialog=true;
   }
   updateRefferedfrom(){
     this.managerefferedfromService.createRefferedfrom(this.selectedRefferedfrom).subscribe(
      () => {
        this.addSuccess("Success!","Reffered From information updated successfully.");
           
     }, 
     () => {
     this.addError("Failed!","Reffered From  creation failed.");
     this.refferedfromDialog = false;
   });
  }

   addSuccess(title:string,message:string) {
     this.messageService.add({severity:'success', summary:title, detail:message});
     
   
   }
   addError(title:string,message:string) {
     this.messageService.add({severity:'error', summary:title, detail:message});
     
   }

   hideUserDialog(){
     this.refferedfromDialog = false;
   }

}

