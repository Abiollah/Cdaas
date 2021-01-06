import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { PriorityData } from '../domain/priority.data';
import {ManagePriorityService} from '../service/manage.priority.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-add.priority',
  templateUrl: './add.priority.component.html',
  styleUrls: ['./add.priority.component.scss'],
  providers: [MessageService]
})
export class ManagePriorityComponent implements OnInit {

  prioritycreatedata = {} as PriorityData;

  

  constructor(private router: Router,private messageService: MessageService,private location: Location,private managepriorityService:ManagePriorityService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Priority', routerLink: ['/addPrioritylist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

addPriority(){
  this.prioritycreatedata.created_by = +sessionStorage.getItem("userid");
  this.prioritycreatedata.created_date = new Date();
  this.managepriorityService.createPriority(this.prioritycreatedata).subscribe(
    data => {
      this.addSuccess("Success!","Priority added successfully.");
  }, 
  error => {
  this.addError("Failed!","Could not add Priority.");
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
  
