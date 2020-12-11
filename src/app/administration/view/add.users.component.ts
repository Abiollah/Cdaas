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
  userid:0,
};

  constructor(private location: Location,private manageuserService:ManageUsersService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Access Control Management', routerLink: ['/setting'] },
      { label: 'Add User', routerLink: ['/addUser'] }    ]);
  }

  ngOnInit(): void {

  }

addUser(){

this.manageuserService.createUpdateUser(this.usercreatedata).subscribe(

  response => {console.log(response);

},
error => {console.log(error)});

}



goBack(){
this.location.back();
}

}
