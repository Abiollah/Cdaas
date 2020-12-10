import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { UserData, UserDataCreate } from '../domain/users.data';
import {ManageUsersService} from '../service/manage.users.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-manage-users',
  templateUrl: './add.users.component.html',
  providers: [MessageService]
})
export class ManageUsersComponent implements OnInit {
  
usercreatedata: UserData = {
  username: '',
  password: '',
  loginstatus: false,
  user_type_id: 0,
  userid:0
};

  constructor(private messageService: MessageService,private location: Location,private manageuserService:ManageUsersService, private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Access Control Management', routerLink: ['/setting'] },
      { label: 'Add User', routerLink: ['/addUser'] }    ]);
  }

  ngOnInit(): void {
    
  }

addUser(){
  
this.manageuserService.createUser(this.usercreatedata).subscribe(
  response => {console.log(response);
    this.addSuccess("Success!","User added successfully");
    
}, 
error => {console.log(error)});
this.addError("Failed!","User creation failed.");
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
