import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { UserData, UserDataCreate } from '../domain/users.data';
import {ManageUsersService} from '../service/manage.users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-users',
  templateUrl: './add.users.component.html'
})
export class ManageUsersComponent implements OnInit {
<<<<<<< HEAD

usercreatedata: UserData = {
=======
  usercreatedata?: UserData ;
/*usercreatedata: UserData = {
>>>>>>> 5a56dda4bb13ade4b24308a6af71b98c1b91b7e6
  username: '',
  password: '',
  loginstatus: false,
  user_type_id: 0,
  userid:0
};*/

  constructor(private location: Location,private manageuserService:ManageUsersService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Access Control Management', routerLink: ['/setting'] },
      { label: 'Add User', routerLink: ['/addUser'] }    ]);
  }

  ngOnInit(): void {

  }

addUser(){
<<<<<<< HEAD

this.manageuserService.createUser(this.usercreatedata).subscribe(
=======
  
this.manageuserService.createUpdateUser(this.usercreatedata).subscribe(
>>>>>>> 5a56dda4bb13ade4b24308a6af71b98c1b91b7e6
  response => {console.log(response);

},
error => {console.log(error)});

}



goBack(){
this.location.back();
}

}
