import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';
import { ClientData } from '../domain/client.data';
import {ManageClientService} from '../service/manage.client.service';
import { Location } from '@angular/common';
import {MessageService,TreeNode} from 'primeng/api';
import { Router } from '@angular/router';
import { GenderData } from '../../administration/domain/gender.data';
import { ManageGendersService } from 'src/app/administration/service/manage.genders.service';
import { MetadataConfigService } from 'src/app/administration/service/metadata-config.service';
import { MaritalStatusData } from 'src/app/administration/domain/maritalstatus.data';
import { OccupationData } from 'src/app/administration/domain/occupation.data';
import { QualificationData } from 'src/app/administration/domain/qualification.data';
import { HeirarchyUnitsData } from 'src/app/administration/domain/heirarchyunits.data';
import { AssessmentQuestions, AssessmentType } from 'src/app/administration/domain/assessments.data';

@Component({
  selector: 'app-patient.registration',
  templateUrl: './client.registration.component.html',
  providers:[MessageService]
 // styleUrls: ['./patient.registration.component.scss']

})
export class ClientRegistrationComponent implements OnInit {
  clientcreatedata = {} as  ClientData;
  facilityDialog: boolean;
  loading: boolean;
  
  genderMap: GenderData[];
  selectedGender: GenderData;
  maritalstatusMap: MaritalStatusData[];
  selectedMaritalStatus: MaritalStatusData[];
  occupationMap: OccupationData[];
  selectedOccupation: OccupationData;
  qualificationMap: QualificationData[];
  selectedQualification: QualificationData;
  heirarchyunitsMap: HeirarchyUnitsData[];
  heirarchyunitsTree:any[];
  selectedHeirarchyUnit: HeirarchyUnitsData;
  assessmentTypeMap: AssessmentType[];
  selectedAssessmentType: AssessmentType;
  assessmentTypePreMap: AssessmentType[];
  selectedAssessmentQuestion: AssessmentQuestions;

  assessmentQuestionMap = { assessmentType: {} } as unknown as AssessmentQuestions[];
  assessmentQuestions: AssessmentQuestions[];
  

  
  constructor(private router: Router,
   private messageService: MessageService,
    private location: Location,
    private manageclientService:ManageClientService, 
    private breadcrumbService: AppBreadcrumbService,
    private metadataConfigService: MetadataConfigService) {
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
    else{
      this.loadConfigMetadata();
    }
    
   
    
  }
   protected loadConfigMetadata(){
   this.metadataConfigService.getGenderList().subscribe(p => {this.genderMap = p});
   this.metadataConfigService.getMaritalStatusList().subscribe(p => {this.maritalstatusMap = p});
   this.metadataConfigService.getOccupationList().subscribe(p => {this.occupationMap = p});
   this.metadataConfigService.getQualificationList().subscribe(p => {this.qualificationMap = p});
   this.metadataConfigService.getHeirarchyUnitsList().subscribe(p => {this.heirarchyunitsMap = p});
   this.metadataConfigService.getAssessmentTypeList().subscribe(p => {this.assessmentTypeMap = p});
   this.metadataConfigService.getAssessmentQuestionList().subscribe(p => {this.assessmentQuestionMap = p});
   

  }
  loadHeirarchyUnits(){
    
    this.facilityDialog=true;
    this.buildHeirarchyTree(this.heirarchyunitsMap);
    
  }

  onAssessmentSelection(){
    this.rsp = 0;
    this.assessmentQuestions = [];
    this.assessmentQuestionMap.filter(p=> {
      if (p.assessment_type_id === this.selectedAssessmentType.assessment_type_id){
        this.assessmentQuestions.push(p);
      
      }
      })
  }

  rsp: number;
  
  calculateResponses(){
    
     this.rsp = 0;
    this.assessmentQuestions.forEach(p=> {
    
      if(p.default_response){
        this.rsp = this.rsp+1;
      }
    });
   
  }

  saveResponses(){
    
  }
  

  heirarchyOnSelect(): void{
   this.clientcreatedata.facility_id = +this.selectedHeirarchyUnit.heirarchyunitid;
   this.clientcreatedata.facility_name = this.selectedHeirarchyUnit.name;
   this.facilityDialog = false;
  }

  roots: TreeNode[] = [];
  
  private buildHeirarchyTree(list) {
    this.roots = [];
    var map = {}, node, i;
    
    for (i = 0; i < list.length; i += 1) {
      map[list[i].heirarchyunitid] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentid !== 0) {
        list[map[node.parentid]].children.push(node);
      } else {
        this.roots.push(node);
      }
    }
    return this.roots;
  }


  addClient(){
    this.clientcreatedata.created_by = +sessionStorage.getItem('userid');
    this.manageclientService.createUpdateClient(this.clientcreatedata)
    .subscribe(
    () => {
      this.addSuccess("Success","Client registration successfully.");
      },
    () => {
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



