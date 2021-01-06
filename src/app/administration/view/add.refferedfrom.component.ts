import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { RefferedfromData } from '../domain/refferedfrom.data';
import {ManageRefferedfromService} from '../service/manage.refferedfrom.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add.refferedfrom',
  templateUrl: './add.refferedfrom.component.html',
  styleUrls: ['./add.refferedfrom.component.scss'],
  providers: [MessageService]
})
export class ManageRefferedfromComponent implements OnInit {

  refferedfromcreatedata = {} as RefferedfromData;

  constructor(private router: Router,private messageService: MessageService,private location: Location,private managerefferedfromService:ManageRefferedfromService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Reffered From', routerLink: ['/addRefferedfromist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

  addRefferedfrom(){
    this.refferedfromcreatedata.created_by = +sessionStorage.getItem("userid");
    this.refferedfromcreatedata.created_date = new Date();
    this.managerefferedfromService.createRefferedfrom(this.refferedfromcreatedata).subscribe(
      () => {
        this.addSuccess("Success!","Reffered From added successfully.");
    }, 
    () => {
    this.addError("Failed!","Could not add Reffered From.");
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

