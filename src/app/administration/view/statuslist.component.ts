import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { StatusData } from '../domain/status.data';
import {ManageStatusService} from '../service/manage.status.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';




@Component({
  selector: 'app-statuslist',
  templateUrl: './statuslist.component.html',
  styleUrls: ['./statuslist.component.scss'],
  providers: [MessageService]
})

export class StatuslistComponent implements OnInit {

  statusList:any;
  selectedStatus: StatusData;
  statusDialog: boolean;

  
  constructor(private messageService: MessageService,private router: Router,private location: Location,private managestatusService:ManageStatusService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'List Status', routerLink: ['/statuslist'] }    ]);
   }

  ngOnInit(): void {
    this.StatusList();
  }

  StatusList():void{
    this.managestatusService.getStatuss().subscribe(data => {
      this.statusList = data;
      console.log(data);
    }
    );
    }
      goToAddStatus(){
        this.router.navigate(['addStatus']);
      }
      goBack(){
        this.location.back();
      }
      editStatus(status: StatusData){
      this.selectedStatus = {...status};
      this.statusDialog=true;
     }
     updateStatus(){
       this.managestatusService.createStatus(this.selectedStatus).subscribe(
        () => {
          this.addSuccess("Success!","Status information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Status creation failed.");
       this.statusDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.statusDialog = false;
     }
  

}
