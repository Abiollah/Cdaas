import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import {ManageUserRoleService} from '../service/manage.user.role.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { UserRoleData } from '../domain/user.role.data';
@Component({
  selector: 'app-user-role-list',
  templateUrl: './user-role-list.component.html',
  //styleUrls: ['./user-role-list.component.scss']
})
export class UserRoleListComponent implements OnInit {
userRoleList: any;
selectedUserRole: UserRoleData;
userRoleDialog: boolean;
  constructor(private router: Router,private location: Location,private manageuserroleService:ManageUserRoleService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Access Control Management', routerLink: ['/setting'] },
      { label: 'Add User Role', routerLink: ['/userrolelist'] }    ]);

  }

  ngOnInit(): void {
    this.userRoleList();
  }
  UserRoleList(): void{
    this.manageuserroleService.getUserRole().subscribe(data => {
      this.UserRoleList = data;
      console.log(data);
    });

  }
goToAddUserRole(){
  this.router.navigate(['adduserrole']);
}
goBack(){
  this.location.back();
}

editUserRole(userRole: UserRoleData){
 this.selectedUserRole = {...userRole};
 this.userRoleDialog=true;
}

}

