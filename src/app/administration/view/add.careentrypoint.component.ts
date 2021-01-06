import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { CareEntryPointData } from '../domain/careentrypoint.data';
import {ManageCareentrypointService} from '../service/manage.careentrypoint.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-add.careentrypoint',
  templateUrl: './add.careentrypoint.component.html',
  styleUrls: ['./add.careentrypoint.component.scss'],
  providers: [MessageService]
})
export class ManageCareentrypointComponent implements OnInit {
  careentrypointcreatedata = {} as CareEntryPointData;

  constructor(private router: Router,private messageService: MessageService,private location: Location,private managecareentrypointService:ManageCareentrypointService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Care Entry Point', routerLink: ['/addCareentrypointlist'] }    ]);
  }


  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

addCareentrypoint(){
  this.careentrypointcreatedata.created_by = +sessionStorage.getItem("userid");
  this.careentrypointcreatedata.created_date = new Date();
  this.managecareentrypointService.createCareEntryPoint(this.careentrypointcreatedata).subscribe(
    () => {
      this.addSuccess("Success!","Care Entry Point added successfully.");
  }, 
  () => {
  this.addError("Failed!","Could not add Care Entry Point.");
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
  


