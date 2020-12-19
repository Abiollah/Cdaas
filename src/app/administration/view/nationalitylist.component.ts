import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { NationalityData, NationalityDataCreate } from '../domain/nationality.data';
import {ManageNationalityService} from '../service/manage.nationality.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';

@Component({
  selector: 'app-nationalitylist',
  templateUrl: './nationalitylist.component.html',
  styleUrls: ['./nationalitylist.component.scss']
})
export class NationalitylistComponent implements OnInit {
  nationalityList:any;
  selectedNationality: NationalityData;
  nationalityDialog: boolean;

  constructor(private messageService: MessageService,private router: Router,private location: Location,private managenationalityService:ManageNationalityService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Nationality', routerLink: ['/nationalitylist'] }    ]);
   }

  ngOnInit(): void {
    this.NationalityList();
  }

  NationalityList():void{
    this.managenationalityService.getNationalitys().subscribe(data => {
      this.nationalityList = data;
      console.log(data);
    }
    );
    }
      goToAddNationality(){
        this.router.navigate(['addNationality']);
      }
      goBack(){
        this.location.back();
      }
      editNationality(nationality: NationalityData){
      this.selectedNationality = {...nationality};
      this.nationalityDialog=true;
     }
     updateNationality(){
       this.managenationalityService.createUpdateNationality(this.selectedNationality).subscribe(
        () => {
          this.addSuccess("Success!","Nationality information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Nationality creation failed.");
       this.nationalityDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.nationalityDialog = false;
     }
  

}



