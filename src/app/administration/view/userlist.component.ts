import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { UserData, UserDataCreate } from '../domain/users.data';
import {ManageUsersService} from '../service/manage.users.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
  providers: [MessageService]
})
export class UserlistComponent implements OnInit {
  userList:any;
  selectedUser: UserData;
  userDialog: boolean;

  constructor(private messageService: MessageService,private router: Router,private location: Location,private manageuserService:ManageUsersService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Access Control Management', routerLink: ['/setting'] },
      { label: 'Add User', routerLink: ['/userlist'] }    ]);
   }

  ngOnInit() {
    this.UserList();
   
  }
  UserList():void{
    this.manageuserService.getUsers().subscribe(data => {
      this.userList = data;
      console.log(data);
    }
    );
    }

    goToAddUser(){
      this.router.navigate(['addUser']);
    }
    goBack(){
      this.location.back();
    }

    editUser(user: UserData){
     this.selectedUser = {...user};
     this.userDialog=true;
    }
    updateUser(){
      this.manageuserService.createUpdateUser(this.selectedUser).subscribe(
        response => {console.log(response);
          this.userList.push(this.selectedUser);
          this.ngOnInit();
          this.addSuccess("Success!","User updated successfully");
          
          
      }, 
      error => {console.log(error)});
      this.addError("Failed!","User creation failed.");

      this.userDialog = false;
    }

    addSuccess(title:string,message:string) {
      this.messageService.add({severity:'success', summary:title, detail:message});
      
    
    }
    addError(title:string,message:string) {
      this.messageService.add({severity:'error', summary:title, detail:message});
      
    }

    hideUserDialog(){
      this.userDialog = false;
    }
}
