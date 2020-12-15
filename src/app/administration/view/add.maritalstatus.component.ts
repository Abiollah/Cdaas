import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { MaritalStatusData, MaritalStatusDataCreate } from '../domain/maritalstatus.data';
import {ManageMaritalstatusService} from '../service/manage.maritalstatus.service';
//import { GenderlistComponent } from '../view/genderlist.component';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-add.maritalstatus',
  templateUrl: './add.maritalstatus.component.html',
  //styleUrls: ['./add.maritalstatus.component.scss'],
  providers: [MessageService]
})
export class AddMaritalstatusComponent implements OnInit {
      

 maritalstatuscreatedata: MaritalStatusData = {
  name: '',
  description: '',
  marital_status_id: 0,
  code: '',
  created_by: 0,
  created_date: null,
  
};


  constructor(private messageService: MessageService,private router: Router,private location: Location,private managemaritalstatusservice:ManageMaritalstatusService, private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'METADATA', routerLink: ['/metadatalist'] },
      { label: 'maritalstatus', routerLink: ['/maritalstatuslist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }


addmaritalstatus(){
  this.maritalstatuscreatedata.created_by = +sessionStorage.getItem('userid');
  this.maritalstatuscreatedata.created_date = new Date();
  this.managemaritalstatusservice.createMaritalStatus(this.maritalstatuscreatedata).subscribe(
  data => {
    this.addSuccess("Success!","Marital Status added successfully.");
    },
  error => {
  this.addError("Failed!","Could not add marital status.");
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

