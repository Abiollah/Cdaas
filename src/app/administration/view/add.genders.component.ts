import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { GenderData } from '../domain/gender.data';
import {ManageGendersService} from '../service/manage.genders.service';
import { GenderlistComponent } from '../view/genderlist.component';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-add.genders',
  templateUrl: './add.genders.component.html',
  providers: [MessageService]
})

export class AddGendersComponent implements OnInit {
      

  gender = {} as GenderData;


    constructor(private messageService: MessageService,private router: Router,private location: Location,private managegenderService:ManageGendersService, private breadcrumbService: AppBreadcrumbService) { 
      this.breadcrumbService.setItems([
        { label: 'Dashboard', routerLink: ['/dashboard'] },
        { label: 'METADATA', routerLink: ['/metadatalist'] },
        { label: 'GENDER', routerLink: ['/genderlist'] }    ]);
    }
  
    ngOnInit(): void {
      /*if(sessionStorage.getItem('username') == null){
        this.addError("Session Expired.","Your current session has expired. Re-login.");
        this.router.navigate(['']);
      }*/
    }
  
  addGender(){
  this.gender.created_by = +sessionStorage.getItem('userid');
  this.gender.created_date= new Date();
  this.managegenderService.createGender(this.gender).subscribe(
  data => {
      this.addSuccess("Success!","Gender added successfully.");
  }, 
  error => {
  this.addError("Failed!","Could not add gender.");
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
  
