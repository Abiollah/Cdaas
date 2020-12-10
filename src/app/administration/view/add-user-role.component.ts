import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { UserRoleData } from '../domain/user.role.data';
import {ManageUserRoleService} from '../service/manage.user.role.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
//  styleUrls: ['./add-user-role.component.scss']
})
export class AddUserRoleComponent implements OnInit {

  userrolecreatedata: UserRoleData = {
    userrole_id: '',
    name: '',
    code: '',
    description: '',
    created_by: '',
    created_date: ''
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
  this.manageuserroleService.createUserRole(this.userrolecreatedata).subscribe(
    response => {console.log(response);
    },

    error => {console.log(error)});

}
goBack(){
  this.location.back();
  }

  }
