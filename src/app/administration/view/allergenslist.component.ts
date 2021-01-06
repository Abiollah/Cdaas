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
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Allergens', routerLink: ['/allergenslist'] }    ]);
   }

  ngOnInit(): void {
    this.AllergensList();
  }

  AllergensList():void{
    this.manageallergensService.getAllergenss().subscribe(data => {
      this.AllergensList = data;
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
      editAllergens(Allergens: AllergensData){
      this.selectedAllergens = {...Allergens};
      this.allergensDialog=true;
     }
     updateAllergens(){
       this.manageallergensService.createUpdateAllergens(this.selectedAllergens).subscribe(
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
