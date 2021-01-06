import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { CareEntryPointData } from '../domain/careentrypoint.data';
import {ManageCareentrypointService} from '../service/manage.careentrypoint.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';

@Component({
  selector: 'app-careentrypointlist',
  templateUrl: './careentrypointlist.component.html',
  styleUrls: ['./careentrypointlist.component.scss'],
  providers: [MessageService]
})
export class CareentrypointlistComponent implements OnInit {
  careentrypointList:any;
  selectedCareentrypoint: CareEntryPointData;
  careentrypointDialog: boolean;

  constructor(private messageService: MessageService,private router: Router,private location: Location,private managecareentrypointService:ManageCareentrypointService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'List Care Entry Point', routerLink: ['/careentrypointlist'] }    ]);
   }

  ngOnInit(): void {
    this.CareentrypointList();
  }

  CareentrypointList():void{
    this.managecareentrypointService.getCareEntryPoints().subscribe(data => {
      this.careentrypointList = data;
      console.log(data);
    }
    );
    }
      goToAddCareentrypoint(){
        this.router.navigate(['addCareentrypoint']);
      }
      goBack(){
        this.location.back();
      }
      editCareentrypoint(careentrypoint: CareEntryPointData){
      this.selectedCareentrypoint = {...careentrypoint};
      this.careentrypointDialog=true;
     }
     updateCareentrypoint(){
       this.managecareentrypointService.createCareEntryPoint(this.selectedCareentrypoint).subscribe(
        () => {
          this.addSuccess("Success!","Care Entry Point information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Care Entry Point creation failed.");
       this.careentrypointDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.careentrypointDialog = false;
     }
  

}






