import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { UserData, UserDataCreate } from '../domain/users.data';
import {ManageUsersService} from '../service/manage.users.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  userList:any;
  constructor(private router: Router,private location: Location,private manageuserService:ManageUsersService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Access Control Management', routerLink: ['/setting'] },
      { label: 'Add User', routerLink: ['/userlist'] }    ]);
   }

  ngOnInit(): void {
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
}
