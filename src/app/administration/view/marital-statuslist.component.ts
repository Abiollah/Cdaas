import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { MaritalStatusData } from '../domain/maritalstatus.data';
import {ManageMaritalstatusService} from '../service/manage.maritalstatus.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-marital-statuslist',
  templateUrl: './marital-statuslist.component.html',
  styleUrls: ['./marital-statuslist.component.scss'],
  providers: [MessageService]
})

export class MaritalStatuslistComponent implements OnInit {
  maritalStatusList:any;
  selectedMaritalStatus:MaritalStatusData;
  maritalstatusDialog: boolean;

  constructor(private messageService: MessageService, private router: Router, private location: Location, private manageMaritalstatusService:ManageMaritalstatusService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'metadata', routerLink: ['/metadatalist'] },
      { label: 'maritalstatus', routerLink: ['/maritalstatuslist'] }    ]);
   }

  ngOnInit(): void {
    this.MaritalStatusList();
  }
  MaritalStatusList():void{
    this.manageMaritalstatusService.getMaritalStatuss().subscribe(data => {
      this.maritalStatusList = data;
      console.log(data);
    }
    );
    }

    goToAddMaritalStatus(){
      this.router.navigate(['addmaritalstatus']);
    }

    goBack(){
      this.location.back();
    }

    editMaritalStatus(maritalstatus: MaritalStatusData){
      this.selectedMaritalStatus = {...maritalstatus};
      this.maritalstatusDialog=true;
     }

     updateMaritalstatus(){
       this.manageMaritalstatusService.updateMaritalStatus(this.selectedMaritalStatus).subscribe(
         () => {
           this.addSuccess("Success!","User information updated successfully.");
           
       }, 
       () => {
         this.addError("Failed!","Could not update user information.");
         this.maritalstatusDialog = false;
       });
       
     }

     addSuccess(title:string,message:string) {
      this.messageService.add({severity:'success', summary:title, detail:message});
      
    
    }
    addError(title:string,message:string) {
      this.messageService.add({severity:'error', summary:title, detail:message});
      
    }

    hideMaritalStatusDialog(){
      this.maritalstatusDialog = false;
    }

}
