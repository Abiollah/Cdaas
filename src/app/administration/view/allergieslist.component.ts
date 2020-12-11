import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { AllergiesData, AllergiesDataCreate } from '../domain/allergies.data';
import {ManageAllergiesService} from '../service/manage.allergies.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-allergieslist',
  templateUrl: './allergieslist.component.html',
  styleUrls: ['./allergieslist.component.scss']
})
export class AllergieslistComponent implements OnInit {
  allergiesList:any;
  constructor(private router: Router,private location: Location,private manageallergiesService:ManageAllergiesService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Allergies', routerLink: ['/allergylist'] }    ]);
   }

  ngOnInit(): void {
    this.AllergiesList();
  }

  AllergiesList():void{
    this.manageallergiesService.getAllergies().subscribe(data => {
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

}
