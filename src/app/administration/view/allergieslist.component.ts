import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { AllergiesData, AllergiesDataCreate } from '../domain/allergies.data';
import {ManageAllergiesService} from '../service/manage.allergies.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';

@Component({
  selector: 'app-allergieslist',
  templateUrl: './allergieslist.component.html',
  styleUrls: ['./allergieslist.component.scss'],
  providers: [MessageService]
})
export class AllergieslistComponent implements OnInit {
  allergiesList:any;
  selectedAllergies: AllergiesData;
  allergiesDialog: boolean;

  
  constructor(private messageService: MessageService,private router: Router,private location: Location,private manageallergiesService:ManageAllergiesService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Allergies', routerLink: ['/allergylist'] }    ]);
   }

  ngOnInit(): void {
    this.AllergiesList();
  }

  AllergiesList():void{
    this.manageallergiesService.getAllergiess().subscribe(data => {
      this.allergiesList = data;
      console.log(data);
    }
    );
    }
      goToAddAllergies(){
        this.router.navigate(['addAllergies']);
      }
      goBack(){
        this.location.back();
      }
      editAllergies(allergies: AllergiesData){
      this.selectedAllergies = {...allergies};
      this.allergiesDialog=true;
     }
     updateAllergies(){
       this.manageallergiesService.createUpdateAllergies(this.selectedAllergies).subscribe(
        () => {
          this.addSuccess("Success!","Allergies information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Allergy creation failed.");
       this.allergiesDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.allergiesDialog = false;
     }
  

}
