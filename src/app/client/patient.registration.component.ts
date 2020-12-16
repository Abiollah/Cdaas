import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../app.breadcrumb.service';
import {ManageGendersService} from '../administration/service/manage.genders.service';
import { GenderData } from '../administration/domain/gender.data';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-patient.registration',
  templateUrl: './patient.registration.component.html',
 // styleUrls: ['./patient.registration.component.scss']

})
export class PatientComponent implements OnInit {
genderMap: GenderData[];
selectedGender: GenderData;

 
  constructor(
    private breadcrumbService: AppBreadcrumbService,
    private manageGenderService: ManageGendersService) {
    this.breadcrumbService.setItems([
        { label: 'Dashboard', routerLink: ['/dashboard'] },
        { label: 'Register KP', routerLink: ['/registration'] }
    ]);
}

  ngOnInit(): void {
    this.getGenderMap();
  }



  getGenderMap(){
    return this.manageGenderService.getGenders()
    .subscribe(p => {this.genderMap = p;})}


 test(){
   console.log(this.selectedGender.gender_id);
   this.genderMap.map(p => [
    {name  : p.name, 
     gender_id : p.gender_id,
     code: p.code,
     description: p.description,
     created_by: p.created_by}
]);
 }

}
