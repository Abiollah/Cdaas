import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { PregnancyData } from '../domain/pregnancy.data';
import {ManagePregnancyService} from '../service/manage.pregnancy.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add.pregnancy',
  templateUrl: './add.pregnancy.component.html',
  styleUrls: ['./add.pregnancy.component.scss']
})
export class ManagePregnancyComponent implements OnInit {

  pregnancycreatedata = {} as PregnancyData;

  constructor(private router: Router,private messageService: MessageService,private location: Location,private managepregnancyService:ManagePregnancyService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Pregnancy', routerLink: ['/addPregnancylist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

  addPregnancy(){
    this.pregnancycreatedata.created_by = +sessionStorage.getItem("userid");
    this.pregnancycreatedata.created_date = new Date();
    this.managepregnancyService.createUpdatePregnancy(this.pregnancycreatedata).subscribe(
      () => {
        this.addSuccess("Success!","Pregnancy added successfully.");
    }, 
    () => {
    this.addError("Failed!","Could not add Pregnancy.");
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
