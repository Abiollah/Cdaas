import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import {ManageUserRoleService} from '../service/manage.user.role.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { UserRoleData } from '../domain/user.role.data';
import {MessageService,Message} from 'primeng/api';

@Component({
  selector: 'app-user-role-list',
  templateUrl: './user-role-list.component.html',
  providers: [MessageService]
})
export class UserRoleListComponent implements OnInit {
userRoleList: any;
selectedUserRole: UserRoleData;
userRoleDialog: boolean;

  constructor(private messageService: MessageService, private router: Router,private location: Location,private manageuserroleService:ManageUserRoleService, private breadcrumbService: AppBreadcrumbService) {
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
  this.router.navigate(['userrole']);
}
goBack(){
  this.location.back();
}

editUserRole(userRole: UserRoleData){
 this.selectedUserRole = {...userRole};
 this.userRoleDialog=true;
}
updateUserRole(){
  this.manageuserroleService.createUpdateUserRole(this.selectedUserRole).subscribe(
    response => {console.log(response);
      this.userRoleList.push(this.selectedUserRole);
      this.ngOnInit();
      this.addSuccess("Success!","User role updated successfully");


  },

error => {console.log(error)});
  this.addError("Failed!","User creation failed.");

  this.userRoleDialog = false;
}
addSuccess(title:string,message:string) {
  this.messageService.add({severity:'success', summary:title, detail:message});


}
addError(title:string,message:string) {
  this.messageService.add({severity:'error', summary:title, detail:message});

}

hideUserDialog(){
  this.userRoleDialog = false;
}

}
