import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { PriorityData } from '../domain/priority.data';
import {ManagePriorityService} from '../service/manage.priority.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';


@Component({
  selector: 'app-prioritylist',
  templateUrl: './prioritylist.component.html',
  styleUrls: ['./prioritylist.component.scss'],
  providers: [MessageService]
})
export class PrioritylistComponent implements OnInit {
  priorityList:any;
  selectedPriority: PriorityData;
  priorityDialog: boolean;

  
  constructor(private messageService: MessageService,private router: Router,private location: Location,private managepriorityService:ManagePriorityService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'List Priority', routerLink: ['/prioritylist'] }    ]);
   }

  ngOnInit(): void {
    this.PriorityList();
  }

  PriorityList():void{
    this.managepriorityService.getPrioritys().subscribe(data => {
      this.priorityList = data;
      console.log(data);
    }
    );
    }
      goToAddPriority(){
        this.router.navigate(['addPriority']);
      }
      goBack(){
        this.location.back();
      }
      editPriority(priority: PriorityData){
      this.selectedPriority = {...priority};
      this.priorityDialog=true;
     }
     updatePriority(){
       this.managepriorityService.createPriority(this.selectedPriority).subscribe(
        () => {
          this.addSuccess("Success!","Priority information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Priority creation failed.");
       this.priorityDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.priorityDialog = false;
     }
  

}


  
