import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { AllergiesData,AllergensData, SeverityData } from '../domain/allergies.data';
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

  allergensList:any;
  selectedAllergens: AllergensData;
  allergensDialog: boolean;

  severityList:any;
  selectedSeverity: SeverityData;
  severityDialog: boolean;


  
  constructor(private messageService: MessageService,private router: Router,private location: Location,private manageallergiesService:ManageAllergiesService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'METADATA', routerLink: ['/metadatalist'] },
      { label: 'List Allergies', routerLink: ['/allergieslist'] }    ]);
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
       this.manageallergiesService.createAllergies(this.selectedAllergies).subscribe(
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
       this.allergensDialog = false;
       this.severityDialog = false;

     }

     //Allergens

     AllergensList():void{
      this.manageallergiesService.getAllergenss().subscribe(data => {
        this.AllergensList = data;
        console.log(data);
      }
      );
      }
        goToAddAllergens(){
          this.router.navigate(['addAllergens']);
        }
        
        editAllergens(Allergens: AllergensData){
        this.selectedAllergens = {...Allergens};
        this.allergensDialog=true;
       }
       updateAllergens(){
         this.manageallergiesService.createAllergens(this.selectedAllergens).subscribe(
          () => {
            this.addSuccess("Success!","Allergens information updated successfully.");
               
         }, 
         () => {
         this.addError("Failed!","Allergens creation failed.");
         this.allergensDialog = false;
       });
      }
   
       // Severity

       SeverityList():void{
    this.manageallergiesService.getSeveritys().subscribe(data => {
      this.severityList = data;
      console.log(data);
    }
    );
    }
      goToAddSeverity(){
        this.router.navigate(['addSeverity']);
      }
      
      editSeverity(severity: SeverityData){
      this.selectedSeverity = {...severity};
      this.severityDialog=true;
     }
     updateSeverity(){
       this.manageallergiesService.createSeverity(this.selectedSeverity).subscribe(
        () => {
          this.addSuccess("Success!","Severity information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Severity creation failed.");
       this.severityDialog = false;
     });
    }
  

}
