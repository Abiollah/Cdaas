import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { TbstatusData } from '../domain/tbstatus.data';
import {ManageTbstatusService} from '../service/manage.tbstatus.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';


@Component({
  selector: 'app-tbstatuslist',
  templateUrl: './tbstatuslist.component.html',
  styleUrls: ['./tbstatuslist.component.scss'],
  providers: [MessageService]
})
export class TbstatuslistComponent implements OnInit {

  tbstatusList:any;
  selectedTbstatus: TbstatusData;
  tbstatusDialog: boolean;

  
  constructor(private messageService: MessageService,private router: Router,private location: Location,private managetbstatusService:ManageTbstatusService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'List Tbstatus', routerLink: ['/tbstatuslist'] }    ]);
   }

  ngOnInit(): void {
    this.TbstatusList();
  }

  TbstatusList():void{
    this.managetbstatusService.getTbstatuss().subscribe(data => {
      this.TbstatusList = data;
      console.log(data);
    }
    );
    }
      goToAddTbstatus(){
        this.router.navigate(['addTbstatus']);
      }
      goBack(){
        this.location.back();
      }
      editTbstatus(tbstatus: TbstatusData){
      this.selectedTbstatus = {...tbstatus};
      this.tbstatusDialog=true;
     }
     updateTbstatus(){
       this.managetbstatusService.createTbstatus(this.selectedTbstatus).subscribe(
        () => {
          this.addSuccess("Success!","TB Status information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","TB Status creation failed.");
       this.tbstatusDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.tbstatusDialog = false;
     }
  

}

