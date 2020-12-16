import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { ReligionData } from '../domain/religion.data';
import {ManageReligionService} from '../service/manage.religion.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-religion.list',
  templateUrl: './religion.list.component.html',
 // styleUrls: ['./religion.list.component.scss'],
  providers:[MessageService]
})
export class ReligionListComponent implements OnInit {
  religionList:any;
  selectedReligion: ReligionData;
  religionDialog: boolean;

  constructor(private messageService: MessageService, private location: Location, private router: Router, private managereligionService:ManageReligionService,  private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadata'] },
      { label: 'List Religion', routerLink: ['/religionlist'] }    ]);

  }

  ngOnInit(): void {
    this.ReligionList();
  }

  ReligionList():void{
    this.managereligionService.getReligion().subscribe(data => {
      this.ReligionList = data;
      console.log(data);
    }
    );
    }

    goToAddReligion(){
      this.router.navigate(['religion']);
    }
    goBack(){
      this.location.back();
    }
}



