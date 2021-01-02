import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';
import { ReligionData } from '../domain/religion.data';
import {ManageReligionService} from '../service/manage.religion.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-religion',
  templateUrl: './add-religion.component.html',
  styleUrls: ['./add-religion.component.scss'],
  providers:[MessageService]
})
export class AddReligionComponent implements OnInit {

  religioncreatedata: ReligionData = {
    religion_id:0,
    name: '',
    code: '',
    description: '',
  };

  constructor(private messageService: MessageService, private location: Location, private managereligionService:ManageReligionService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-Data', routerLink: ['/metadata'] },
      { label: 'Add Religion', routerLink: ['/religion'] }    ]);
  }

  ngOnInit(): void {

  }
  addReligion(){
    this.religioncreatedata.created_by = +sessionStorage.getItem('userid');
    this.managereligionService.createUpdateReligion(this.religioncreatedata)
    .subscribe(
    data => {
      this.addSuccess("Success","Religion Added successfully.");
      },
    error => {
  this.addError("Unsuccessful.","Could not add religion.");
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





