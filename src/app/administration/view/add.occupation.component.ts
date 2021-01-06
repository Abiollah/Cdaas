import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { OccupationData } from '../domain/occupation.data';
import {ManageOccupationService} from '../service/manage.occupation.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add.occupation',
  templateUrl: './add.occupation.component.html',
  providers: [MessageService]
})
export class ManageOccupationComponent implements OnInit {

  occupationcreateddata = {} as OccupationData; 

  constructor(private router: Router,private messageService: MessageService,private location: Location,private manageoccupationService:ManageOccupationService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Occupation', routerLink: ['/addOccupationlist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

  addOccupation(){
    this.occupationcreateddata.created_by = +sessionStorage.getItem("userid");
    //this.occupationcreateddata.created_date = new Date();
    this.manageoccupationService.createOccupation(this.occupationcreateddata).subscribe(
      data => {
        this.addSuccess("Success!","Occupation added successfully.");
    }, 
    error => {
    this.addError("Failed!","Could not add Occupation.");
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
    



