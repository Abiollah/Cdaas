import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { StatusTypeData } from '../domain/statustype.data';
import {ManageStatusStyleService} from '../service/manage.status.style.service';
import { StatustypelistComponent } from '../view/statustypelist.component';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-statustype',
  templateUrl: './add-statustype.component.html',
  styleUrls: ['./add-statustype.component.scss'],
  providers: [MessageService]
})
export class AddStatustypeComponent implements OnInit {

  statustype = {} as StatusTypeData;


    constructor(private messageService: MessageService,private router: Router,private location: Location,private managestatusstyleservice:ManageStatusStyleService, private breadcrumbService: AppBreadcrumbService) { 
      this.breadcrumbService.setItems([
        { label: 'Dashboard', routerLink: ['/dashboard'] },
        { label: 'METADATA', routerLink: ['/metadatalist'] },
        { label: 'STATUS TYPE', routerLink: ['/statustypelist'] }    ]);
    }
  
    ngOnInit(): void {
      /*if(sessionStorage.getItem('username') == null){
        this.addError("Session Expired.","Your current session has expired. Re-login.");
        this.router.navigate(['']);
      }*/
    }

    addStatusType(){
      this.statustype.created_by = +sessionStorage.getItem('userid');
      this.statustype.created_date= new Date();
      this.managestatusstyleservice.createStatustype(this.statustype).subscribe(
      data => {
          this.addSuccess("Success!","Staus type added successfully.");
      }, 
      error => {
      this.addError("Failed!","Could not add Status Type.");
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
      
    