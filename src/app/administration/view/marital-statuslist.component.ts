import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { GenderData, GenderDataCreate } from '../domain/gender.data';
import {ManageGendersService} from '../service/manage.genders.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-marital-statuslist',
  templateUrl: './marital-statuslist.component.html',
  styleUrls: ['./marital-statuslist.component.scss']
})
export class MaritalStatuslistComponent implements OnInit {
  genderList:any;
  constructor(private router: Router, private location: Location, private managegenderService:ManageGendersService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'METADATA', routerLink: ['/metadata'] },
      { label: 'GENDER', routerLink: ['/gender'] }    ]);
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

}
