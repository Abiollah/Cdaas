import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { LaboratoriesData, LaboratoriesDataCreate } from '../domain/laboratories.data';
import {ManageLaboratoriesService} from '../service/manage.laboratories.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-laboratorieslist',
  templateUrl: './laboratorieslist.component.html',
  styleUrls: ['./laboratorieslist.component.scss']
})
export class LaboratorieslistComponent implements OnInit {

  laboratoriesList:any;
  constructor(private router: Router,private location: Location,private managelaboratoriesService:ManageLaboratoriesService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadata'] },
      { label: 'List Laboratories', routerLink: ['/laboratorieslist'] }    ]);

    }



  ngOnInit(): void {
    this.LaboratoriesList();
  }

  LaboratoriesList():void{
    this.managelaboratoriesService.getLaboratories().subscribe(data => {
      this.laboratoriesList = data;
      console.log(data);
    }
    );
    }

    goToAddLaboratories(){
      this.router.navigate(['addLaboratories']);
    }
    goBack(){
      this.location.back();
    }

}
