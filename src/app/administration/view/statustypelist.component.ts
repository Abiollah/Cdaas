import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { StatusTypeData } from '../domain/statustype.data';
import {ManageStatusStyleService} from '../service/manage.status.style.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-statustypelist',
  templateUrl: './statustypelist.component.html',
  styleUrls: ['./statustypelist.component.scss'],
  providers: [MessageService]
})
export class StatustypelistComponent implements OnInit {
  statustypeList:any;
  selectedStatusType: StatusTypeData;
  staustypeDialog: boolean;

  constructor(private messageService: MessageService, private router: Router, private location: Location, private manageStatusstyleservice:ManageStatusStyleService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'METADATA', routerLink: ['/metadatalist'] },
      { label: 'STATUS TYPE', routerLink: ['/statustypelist'] }    ]);
   }

  ngOnInit(): void {
    this.StatusTypeList();
  }
  StatusTypeList():void{
    this.manageStatusstyleservice.getStatustype().subscribe(data => {
      this.statustypeList = data;
      console.log(data);
    }
    );
    }

    goToAddStatusType(){
      this.router.navigate(['addStatustype']);
    }

    goBack(){
      this.location.back();
    }

    editStatusType(statustype: StatusTypeData){
      this.selectedStatusType = {...statustype};
      this.staustypeDialog=true;
     }

     updateStatusType(){
      this.manageStatusstyleservice.createStatustype(this.selectedStatusType).subscribe(
        response => {console.log(response);
          this.statustypeList.push(this.selectedStatusType);
          this.ngOnInit();
          this.addSuccess("Success!","Statutype updated successfully");
          
          
      }, 

     error => {console.log(error)});
      this.addError("Failed!","Statustype creation failed.");

      this.staustypeDialog = false;
    }

    addSuccess(title:string,message:string) {
      this.messageService.add({severity:'success', summary:title, detail:message});
      
    
    }
    addError(title:string,message:string) {
      this.messageService.add({severity:'error', summary:title, detail:message});
      
    }

    hideStatusTypeDialog(){
      this.staustypeDialog = false;
    }


}