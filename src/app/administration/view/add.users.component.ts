import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { UserData, UserDataCreate } from '../domain/users.data';
import {ManageUsersService} from '../service/manage.users.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-manage-users',
  templateUrl: './add.users.component.html',
  providers: [MessageService]
})
export class ManageUsersComponent implements OnInit {

  usercreatedata = {} as UserData;


  constructor(private router: Router,private messageService: MessageService,private location: Location,private manageuserService:ManageUsersService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Access Control Management', routerLink: ['/setting'] },
      { label: 'Add User', routerLink: ['/addUser'] }    ]);
      
  }

  ngOnInit(): void {
    // if(sessionStorage.getItem('username') == null){
      //this.addError("Session Expired.","Your current session has expired. Re-login.");
     // this.router.navigate(['']);
   // }
    
  } 

addUser(){
this.usercreatedata.created_date =  Date.now();
this.manageuserService.createUpdateUser(this.usercreatedata)
.subscribe(
data => {
  this.addSuccess("Success.","User "+data.username+' created successfully.');
  },
error => {
this.addError("Unsuccessful.","Could not create user.");
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
