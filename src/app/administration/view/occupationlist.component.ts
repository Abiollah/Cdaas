<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { OccupationData } from '../domain/occupation.data';
import {ManageOccupationService} from '../service/manage.occupation.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-occupationlist',
  templateUrl: './occupationlist.component.html',
  //styleUrls: ['./languagelist.component.scss'],
  providers: [MessageService]
})
export class OccupationlistComponent implements OnInit {
  occupationList:any;
  selectedOccupation: OccupationData;
  occupationDialog: boolean;

  constructor(private messageService: MessageService,
    private router: Router,private location: Location,
    private manageoccupationService:ManageOccupationService, 
    private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Occupation', routerLink: ['/occupationlist'] }    ]);
    }
    
  ngOnInit(): void {
    this.OccupationList();
  }

  OccupationList():void{
    this.manageoccupationService.getOccupations().subscribe(data => {
      this.occupationList = data;
      console.log(data);
    }
    );
    }
      goToAddOccupation(){
        this.router.navigate(['addOccupation']);
      }
      goBack(){
        this.location.back();
      }
      editOccupation(occupation: OccupationData){
      this.selectedOccupation = {...occupation};
      this.occupationDialog=true;
     }

       updateOccupation(){
      this.manageoccupationService.createOccupation(this.selectedOccupation).subscribe(
        response => {console.log(response);
          this.occupationList.push(this.selectedOccupation);
          this.ngOnInit();
          this.addSuccess("Success!","Occupation updated successfully");
          
          
      }, 

     error => {console.log(error)});
      this.addError("Failed!","Occupation creation failed.");

      this.occupationDialog = false;
    }

 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.occupationDialog = false;
     }
  

}



=======
import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { OccupationData } from '../domain/occupation.data';
import {ManageOccupationService} from '../../administration/service/manage.occupation.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-occupationlist',
  templateUrl: './occupationlist.component.html',
  styleUrls: ['./occupationlist.component.scss'],
  providers: [MessageService]
})
export class OccupationlistComponent implements OnInit {
  occupationList:any;
  selectedOccupation: OccupationData;
  occupationDialog: boolean;


  constructor(private messageService: MessageService,private router: Router,private location: Location,private manageoccupationService:ManageOccupationService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Occupation', routerLink: ['/occupationlist'] }    ]);
   }

  ngOnInit(): void {
    this.occupationList();
  }

  OccupationList():void{
    this.manageoccupationService.getOccupations().subscribe(data => {
      this.occupationList = data;
      console.log(data);
    }
    );
    }

    goToAddOccupation(){
      this.router.navigate(['addOccupation']);
    }
    goBack(){
      this.location.back();
    }
    editOccupation(occupation: OccupationData){
    this.selectedOccupation = {...occupation};
    this.occupationDialog=true;
   }
   updateOccupation(){
     this.manageoccupationService.createUpdateOccupation(this.selectedOccupation).subscribe(
      () => {
        this.addSuccess("Success!","Occupation information updated successfully.");
           
     }, 
     () => {
     this.addError("Failed!","Occupation creation failed.");
     this.occupationDialog = false;
   });
  }

   addSuccess(title:string,message:string) {
     this.messageService.add({severity:'success', summary:title, detail:message});
     
   
   }
   addError(title:string,message:string) {
     this.messageService.add({severity:'error', summary:title, detail:message});
     
   }

   hideUserDialog(){
     this.occupationDialog = false;
   }


}
>>>>>>> 265c9420503ddc683af487c8c5c4da58d0401b19
