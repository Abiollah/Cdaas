import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { SeverityData } from '../domain/severity.data';
import {ManageSeverityService} from '../service/manage.severity.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';

@Component({
  selector: 'app-severitylist',
  templateUrl: './severitylist.component.html',
  styleUrls: ['./severitylist.component.scss'],
  providers: [MessageService]
})
export class SeveritylistComponent implements OnInit {
  severityList:any;
  selectedSeverity: SeverityData;
  severityDialog: boolean;

  
  constructor(private messageService: MessageService,private router: Router,private location: Location,private manageseverityService:ManageSeverityService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Severity', routerLink: ['/severitylist'] }    ]);
   }

  ngOnInit(): void {
    this.SeverityList();
  }

  SeverityList():void{
    this.manageseverityService.getSeveritys().subscribe(data => {
      this.severityList = data;
      console.log(data);
    }
    );
    }
      goToAddSeverity(){
        this.router.navigate(['addSeverity']);
      }
      goBack(){
        this.location.back();
      }
      editSeverity(severity: SeverityData){
      this.selectedSeverity = {...severity};
      this.severityDialog=true;
     }
     updateSeverity(){
       this.manageseverityService.createUpdateSeverity(this.selectedSeverity).subscribe(
        () => {
          this.addSuccess("Success!","Severity information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Severity creation failed.");
       this.severityDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.severityDialog = false;
     }
  

}

