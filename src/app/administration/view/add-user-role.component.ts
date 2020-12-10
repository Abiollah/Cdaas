import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../../app.breadcrumb.service';
@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
//  styleUrls: ['./add-user-role.component.scss']
})
export class AddUserRoleComponent implements OnInit {

  constructor(
    private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
        { label: 'Dashboard', routerLink: ['/dashboard'] },
        { label: 'Add User Roles', routerLink: ['/userrole'] }
    ]);
}

  ngOnInit(): void {
  }

}




