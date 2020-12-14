import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { PharmaciesData, PharmaciesDataCreate } from '../domain/pharmacies.data';
import {ManagePharmaciesService} from '../service/manage.pharmacies.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pharmacieslist',
  templateUrl: './pharmacieslist.component.html',
  styleUrls: ['./pharmacieslist.component.scss']
})
export class PharmacieslistComponent implements OnInit {

  pharmaciesList:any;
  constructor(private router: Router,private location: Location,private managepharmaciesService:ManagePharmaciesService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadata'] },
      { label: 'List Pharmacies', routerLink: ['/pharmacieslist'] }    ]);

    }

  ngOnInit(): void {
    this.PharmaciesList();
  }

  PharmaciesList():void{
    this.managepharmaciesService.getPharmacies().subscribe(data => {
      this.pharmaciesList = data;
      console.log(data);
    }
    );
    }

    goToAddPharmacies(){
      this.router.navigate(['addPharmacies']);
    }
    goBack(){
      this.location.back();
    }

}
