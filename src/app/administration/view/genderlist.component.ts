import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { GenderData } from '../domain/gender.data';
import {ManageGendersService} from '../service/manage.genders.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-genderlist',
  templateUrl: './genderlist.component.html',
  styleUrls: ['./genderlist.component.scss'],
  providers: [MessageService]
})
export class GenderlistComponent implements OnInit {
  genderList:any;
  selectedGender: GenderData;
  genderDialog: boolean;

  constructor(private messageService: MessageService, private router: Router, private location: Location, private managegenderService:ManageGendersService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'METADATA', routerLink: ['/metadatalist'] },
      { label: 'GENDER', routerLink: ['/genderlist'] }    ]);
   }

  ngOnInit(): void {
    this.GenderList();
  }
   GenderList():void{
    this.managegenderService.getGenders().subscribe(data => {
      this.genderList = data;
      console.log(data);
    }
    );
    }

    goToAddGender(){
      this.router.navigate(['addGender']);
    }

    goBack(){
      this.location.back();
    }

    editGender(gender: GenderData){
      this.selectedGender = {...gender};
      this.genderDialog=true;
     }

     updateGender(){
      this.managegenderService.createGender(this.selectedGender).subscribe(
        response => {console.log(response);
          this.genderList.push(this.selectedGender);
          this.ngOnInit();
          this.addSuccess("Success!","User updated successfully");
          
          
      }, 

     error => {console.log(error)});
      this.addError("Failed!","User creation failed.");

      this.genderDialog = false;
    }

    addSuccess(title:string,message:string) {
      this.messageService.add({severity:'success', summary:title, detail:message});
      
    
    }
    addError(title:string,message:string) {
      this.messageService.add({severity:'error', summary:title, detail:message});
      
    }

    hideGenderDialog(){
      this.genderDialog = false;
    }


}
