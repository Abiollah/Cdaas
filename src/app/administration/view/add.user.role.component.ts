import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { UserRoleData } from '../domain/user.role.data';
import {ManageUserRoleService} from '../service/manage.user.role.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-add-user-role',
  templateUrl: './add.user.role.component.html',
  providers: [MessageService]
})
export class AddUserRoleComponent implements OnInit {

  userrolecreatedata: UserRoleData = {
    userrole_id: '',
    name: '',
    code: '',
    description: '',
    created_by: '',
    created_date: new Date()
  };

  constructor(private location: Location,private manageuserroleService:ManageUserRoleService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
        { label: 'Dashboard', routerLink: ['/dashboard'] },
        { label: 'Add User Roles', routerLink: ['/userrole'] }
    ]);
}

  ngOnInit(): void {
  }
addUserRole(){
  this.manageuserroleService.createUpdateUserRole(this.userrolecreatedata).subscribe(
    response => {console.log(response);
    },

    error => {console.log(error)});

}
goBack(){
  this.location.back();
  }

  }




