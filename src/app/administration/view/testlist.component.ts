import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { TestData } from '../domain/test.data';
import {ManageTestService} from '../service/manage.test.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';


@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.scss'],
  providers: [MessageService]
})
export class TestlistComponent implements OnInit {

  testList:any;
  selectedTest: TestData;
  testDialog: boolean;

  
  constructor(private messageService: MessageService,private router: Router,private location: Location,private managetestService:ManageTestService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Test', routerLink: ['/testlist'] }    ]);
   }

  ngOnInit(): void {
    this.TestList();
  }

  TestList():void{
    this.managetestService.getTests().subscribe(data => {
      this.TestList = data;
      console.log(data);
    }
    );
    }
      goToAddTest(){
        this.router.navigate(['addTest']);
      }
      goBack(){
        this.location.back();
      }
      editTest(test: TestData){
      this.selectedTest = {...test};
      this.testDialog=true;
     }
     updateTest(){
       this.managetestService.createUpdateTest(this.selectedTest).subscribe(
        () => {
          this.addSuccess("Success!","Test information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Test creation failed.");
       this.testDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.testDialog = false;
     }
  

}

