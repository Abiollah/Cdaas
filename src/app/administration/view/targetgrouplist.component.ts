import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { TargetGroupData, TargetGroupDataCreate } from '../domain/targetgroup.data';
import {ManageTargetgroupService} from '../service/manage.targetgroup.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';

@Component({
  selector: 'app-targetgrouplist',
  templateUrl: './targetgrouplist.component.html',
  styleUrls: ['./targetgrouplist.component.scss'],
  providers: [MessageService]
})
export class TargetgrouplistComponent implements OnInit {
  targetgroupList:any;
  selectedTargetgroup: TargetGroupData;
  targetgroupDialog: boolean;


  constructor(private messageService: MessageService,private router: Router,private location: Location,private managetargetgroupService:ManageTargetgroupService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Target-Group', routerLink: ['/targetgrouplist'] }    ]);
   }

  ngOnInit(): void {
    this.TargetgroupList();
  }

  TargetgroupList():void{
    this.managetargetgroupService.getTargetgroups().subscribe(data => {
      this.targetgroupList = data;
      console.log(data);
    }
    );
    }


    goToAddTargetgroup(){
      this.router.navigate(['addTargetgroup']);
    }
    goBack(){
      this.location.back();
    }
    editTargetgroup(targetgroup: TargetGroupData){
    this.selectedTargetgroup = {...targetgroup};
    this.targetgroupDialog=true;
   }
   updateTargetgroup(){
     this.managetargetgroupService.createUpdateTargetgroup(this.selectedTargetgroup).subscribe(
      () => {
        this.addSuccess("Success!","Target-Group information updated successfully.");
           
     }, 
     () => {
     this.addError("Failed!","Target-Group creation failed.");
     this.targetgroupDialog = false;
   });
  }

   addSuccess(title:string,message:string) {
     this.messageService.add({severity:'success', summary:title, detail:message});
     
   
   }
   addError(title:string,message:string) {
     this.messageService.add({severity:'error', summary:title, detail:message});
     
   }

   hideUserDialog(){
     this.targetgroupDialog = false;
   }

}

