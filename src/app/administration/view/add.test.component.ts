import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { TestData } from '../domain/test.data';
import {ManageTestService} from '../service/manage.test.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-add.test',
  templateUrl: './add.test.component.html',
  styleUrls: ['./add.test.component.scss'],
  providers: [MessageService]
})
export class ManageTestComponent implements OnInit {

  
testcreatedata = {} as TestData;

  

constructor(private router: Router,private messageService: MessageService,private location: Location,private managetestService:ManageTestService, private breadcrumbService: AppBreadcrumbService) {
  this.breadcrumbService.setItems([
    { label: 'Dashboard', routerLink: ['/dashboard'] },
    { label: 'Metadata', routerLink: ['/metadatalist'] },
    { label: 'Add Test', routerLink: ['/addTestlist'] }    ]);
}

ngOnInit(): void {
  if(sessionStorage.getItem('username') == null){
    this.addError("Session Expired.","Your current session has expired. Re-login.");
    this.router.navigate(['']);
  }
}

addTest(){
this.testcreatedata.created_by = +sessionStorage.getItem("userid");
this.testcreatedata.created_date = new Date();
this.managetestService.createUpdateTest(this.testcreatedata).subscribe(
  data => {
    this.addSuccess("Success!","Test added successfully.");
}, 
error => {
this.addError("Failed!","Could not add Test.");
}

);
}

goBack(){
this.location.back();
}

addSuccess(title:string,message:string) {
  this.messageService.add({severity:'success', summary:title, detail:message});
  

}
addError(title:string,message:string) {
  this.messageService.add({severity:'error', summary:title, detail:message});
  
}


}

