import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { AllergensData } from '../domain/allergens.data';
import {ManageAllergensService} from '../service/manage.allergens.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';

@Component({
  selector: 'app-allergenslist',
  templateUrl: './allergenslist.component.html',
  styleUrls: ['./allergenslist.component.scss'],
  providers: [MessageService]
})
export class AllergenslistComponent implements OnInit {

  allergensList:any;
  selectedAllergens: AllergensData;
  allergensDialog: boolean;

  
  constructor(private messageService: MessageService,private router: Router,private location: Location,private manageallergensService:ManageAllergensService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'List Allergens', routerLink: ['/allergenslist'] }    ]);
   }

  ngOnInit(): void {
    this.AllergensList();
  }

  AllergensList():void{
    this.manageallergensService.getAllergenss().subscribe(data => {
      this.allergensList = data;
      console.log(data);
    }
    );
    }
      goToAddAllergens(){
        this.router.navigate(['addAllergens']);
      }
      goBack(){
        this.location.back();
      }
      editAllergens(allergens: AllergensData){
      this.selectedAllergens = {...allergens};
      this.allergensDialog=true;
     }
     updateAllergens(){
       this.manageallergensService.createAllergens(this.selectedAllergens).subscribe(
        () => {
          this.addSuccess("Success!","Allergens information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Allergens creation failed.");
       this.allergensDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.allergensDialog = false;
     }
  

}
