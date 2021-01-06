import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { StatusData } from '../domain/status.data';
import {ManageStatusService} from '../service/manage.status.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-add.status',
  templateUrl: './add.status.component.html',
  styleUrls: ['./add.status.component.scss'],
  providers: [MessageService]
})
export class ManageStatusComponent implements OnInit {

  statuscreatedata = {} as StatusData;

  

constructor(private router: Router,private messageService: MessageService,private location: Location,private managestatusService:ManageStatusService, private breadcrumbService: AppBreadcrumbService) {
  this.breadcrumbService.setItems([
    { label: 'Dashboard', routerLink: ['/dashboard'] },
    { label: 'Metadata', routerLink: ['/metadatalist'] },
    { label: 'Add Status', routerLink: ['/addStatuslist'] }    ]);
}

ngOnInit(): void {
  if(sessionStorage.getItem('username') == null){
    this.addError("Session Expired.","Your current session has expired. Re-login.");
    this.router.navigate(['']);
  }
}

addStatus(){
this.statuscreatedata.created_by = +sessionStorage.getItem("userid");
this.statuscreatedata.created_date = new Date();
this.managestatusService.createStatus(this.statuscreatedata).subscribe(
  data => {
    this.addSuccess("Success!","Status added successfully.");
}, 
error => {
this.addError("Failed!","Could not add Status.");
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


