import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { OccupationData } from '../domain/occupation.data';
import {ManageOccupationService} from '../service/manage.occupation.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-occupation',
  templateUrl: './add-occupation.component.html',
  providers: [MessageService]
})
export class AddOccupationComponent implements OnInit {

  occupation = {} as OccupationData;
  constructor(private messageService: MessageService,private router: Router,
    private location: Location, private manageoccupationService:ManageOccupationService, 
    private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'METADATA', routerLink: ['/metadatalist'] },
      { label: 'Occupation List', routerLink: ['/occupationlist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

addOccupation(){
this.occupation.created_by = +sessionStorage.getItem('userid');
this.occupation.created_date= new Date();
this.manageoccupationService.createOccupation(this.occupation).subscribe(
data => {
    this.addSuccess("Success!","Occupation added successfully.");
}, 
error => {
this.addError("Failed!","Could not add occupation.");
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