import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { TestgroupData } from '../domain/testgroup.data';
import {ManageTestgroupService} from '../service/manage.testgroup.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';


@Component({
  selector: 'app-testgrouplist',
  templateUrl: './testgrouplist.component.html',
  styleUrls: ['./testgrouplist.component.scss'],
  providers: [MessageService]
})
export class TestgrouplistComponent implements OnInit {
  testgroupList:any;
  selectedTestgroup: TestgroupData;
  testgroupDialog: boolean;

  
  constructor(private messageService: MessageService,private router: Router,private location: Location,private managetestgroupService:ManageTestgroupService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Testgroup', routerLink: ['/testgrouplist'] }    ]);
   }

  ngOnInit(): void {
    this.TestgroupList();
  }

  TestgroupList():void{
    this.managetestgroupService.getTestgroups().subscribe(data => {
      this.TestgroupList = data;
      console.log(data);
    }
    );
    }
      goToAddTestgroup(){
        this.router.navigate(['addTestgroup']);
      }
      goBack(){
        this.location.back();
      }
      editTestgroup(testgroup: TestgroupData){
      this.selectedTestgroup = {...testgroup};
      this.testgroupDialog=true;
     }
     updateTestgroup(){
       this.managetestgroupService.createUpdateTestgroup(this.selectedTestgroup).subscribe(
        () => {
          this.addSuccess("Success!","Test Group information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Test Group creation failed.");
       this.testgroupDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.testgroupDialog = false;
     }
  

}


  
