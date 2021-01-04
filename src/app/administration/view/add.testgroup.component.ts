import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { TestgroupData } from '../domain/testgroup.data';
import {ManageTestgroupService} from '../service/manage.testgroup.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-add.testgroup',
  templateUrl: './add.testgroup.component.html',
  styleUrls: ['./add.testgroup.component.scss'],
  providers: [MessageService]
})
export class ManageTestgroupComponent implements OnInit {

  testgroupcreatedata = {} as TestgroupData;

  

  constructor(private router: Router,private messageService: MessageService,private location: Location,private managetestgroupService:ManageTestgroupService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Testgroup', routerLink: ['/addTestgrouplist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

addTestgroup(){
  this.testgroupcreatedata.created_by = +sessionStorage.getItem("userid");
  this.testgroupcreatedata.created_date = new Date();
  this.managetestgroupService.createUpdateTestgroup(this.testgroupcreatedata).subscribe(
    data => {
      this.addSuccess("Success!","Test Group added successfully.");
  }, 
  error => {
  this.addError("Failed!","Could not add Test Group.");
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
  
