import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { UserLoginComponent } from 'src/app/login/login.component';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { AppMainComponent } from '../../app.main.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {

  constructor(private messageService: MessageService,private router: Router,private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Favorites' },
      { label: 'Dashboard', routerLink: ['dashboard'] }
  ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }
  addSuccess(title:string,message:string) {
    this.messageService.add({severity:'success', summary:title, detail:message});
  }
  addError(title:string,message:string) {
    this.messageService.add({severity:'error', summary:title, detail:message});
  }
}
