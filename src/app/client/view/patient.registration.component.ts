import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';
import { ClientData, ClientDataCreate } from '../domain/client.data';
import {ManageClientService} from '../service/manage.client.service';
import { Location } from '@angular/common';
import {MessageService } from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-patient.registration',
  templateUrl: './patient.registration.component.html',
  providers:[MessageService]
 // styleUrls: ['./patient.registration.component.scss']

})
export class PatientComponent implements OnInit {

  clientcreatedata: ClientData = {

    client_code: '',
    registration_date:  0,
    date_of_birth:  0,
    surname: '',
    first_name: '',
    other_name: '',
    marital_status: '',
    gender: '',
    email_address: '',
    address: '',
    phone_number: 0,
    alt_phone_number: 0,
    occupation: '',
    qualification: '',
    facility_name: '',
    referred_from: '',
    nationality: '',
    state_of_origin: '',
    lga: '',
    created_by: 0,
    next_of_kin_surname: '',
  next_of_kin_firstname: '',
  next_of_kin_othername: '',
  next_of_kin_gender: '',
  next_of_kin_phone_number: 0,
  next_of_kin_alt_phone_number: 0,
  next_of_kin_address: '',
  next_of_kin_relationship: '',
  next_of_kin_occupation: '',
  };


  constructor(private router: Router,
   private messageService: MessageService,
    private location: Location,private manageclientService:ManageClientService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
        { label: 'Dashboard', routerLink: ['/dashboard'] },
        { label: 'Register KP', routerLink: ['/registration'] },
        { label: 'View KP Client', routerLink: ['/viewkp'] }
    ]);
}

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
    this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }
  addClient(){
    this.clientcreatedata.created_by = +sessionStorage.getItem('userid');
    this.manageclientService.createUpdateClient(this.clientcreatedata)
    .subscribe(
    data => {
      this.addSuccess("Success","Client registration successfully.");
      },
    error => {
this.addError("Unsuccessful.","Could not register client.");
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



