import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { UserData, UserDataCreate } from '../domain/users.data';
import {ManageUsersService} from '../service/manage.users.service';
import { Location } from '@angular/common';
<<<<<<< HEAD
import { MessageService } from 'primeng/api';
=======
import {MessageService} from 'primeng/api';
>>>>>>> 23b2671c3f524ee1e094cfa0438af3b285997a91

@Component({
  selector: 'app-manage-users',
  templateUrl: './add.users.component.html',
  providers: [MessageService]
<<<<<<< HEAD
=======
  
>>>>>>> 23b2671c3f524ee1e094cfa0438af3b285997a91
})
export class ManageUsersComponent implements OnInit {


usercreatedata: UserData = {

  username: '',
  password: '',
  loginstatus: false,
  user_type_id: 0,
  userid:0,
};

  constructor(private messageService: MessageService, private location: Location,private manageuserService:ManageUsersService, private breadcrumbService: AppBreadcrumbService) {
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
