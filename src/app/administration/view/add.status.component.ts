import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { StatusData } from '../domain/status.data';
import {ManageStatusService} from '../service/manage.status.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MetadataConfigService } from 'src/app/administration/service/metadata-config.service';
import { StatusTypeData } from 'src/app/administration/domain/statustype.data';


@Component({
  selector: 'app-add.status',
  templateUrl: './add.status.component.html',
  styleUrls: ['./add.status.component.scss'],
  providers: [MessageService]
})
export class ManageStatusComponent implements OnInit {

  statuscreatedata = {} as StatusData;

  statustypeMap: StatusTypeData[];
  selectedStatusType: StatusTypeData;



constructor(private router: Router,private messageService: MessageService,private location: Location,
  private metadataConfigService: MetadataConfigService, private managestatusService:ManageStatusService, private breadcrumbService: AppBreadcrumbService) {
  this.breadcrumbService.setItems([
    { label: 'Dashboard', routerLink: ['/dashboard'] },
    { label: 'Metadata', routerLink: ['/metadatalist'] },
    { label: 'Add Status', routerLink: ['/addStatuslist'] }    ]);
}

ngOnInit(): void {
  if(sessionStorage.getItem('username') == null){
    this.addError("Session Expired.","Your current session has expired. Re-login.");
    this.router.navigate(['']);
  } else{
    this.loadConfigMetadata();
 }
}


protected loadConfigMetadata(){

  this.metadataConfigService.getStatusTypeList().subscribe(p => {this.statustypeMap = p});
}

addStatus(){
this.statuscreatedata.created_by = +sessionStorage.getItem("userid");
this.statuscreatedata.created_date = Date.now();
this.statuscreatedata.status_type_id = this.selectedStatusType.status_type_id;
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


