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
import { AssessmentQuestions, AssessmentResponses, AssessmentType } from 'src/app/administration/domain/assessments.data';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';


@Component({
  selector: 'app-patient.registration',
  templateUrl: './client.registration.component.html',
  providers:[MessageService,ConfirmationService]
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
    private metadataConfigService: MetadataConfigService,
    private confirmationService: ConfirmationService) {
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
   this.metadataConfigService.getHeirarchyUnitsListById(1).subscribe(p => {this.heirarchyunitsMap = p});
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
  
  assessmentResponse = {} as AssessmentResponses;
  assessmentResponses: AssessmentResponses[] = [];

  saveResponses(){
    if(this.assessmentQuestions.length > 0){
      this.assessmentResponses = [];
      this.assessmentQuestions.forEach(p=>{
        this.assessmentResponse.client_code = ('1231/321/45');
        this.assessmentResponse.assessment_question_id = p.assessment_question_id;
        this.assessmentResponse.value = p.default_response ? 1 : 0;
        this.assessmentResponse.created_by = +sessionStorage.getItem('userid');
        this.assessmentResponse.created_date = Date.now();

        this.assessmentResponses.push(this.assessmentResponse);
        this.assessmentResponse = {} as AssessmentResponses;
        
      })
      
      

    this.manageclientService.createUpdateAssessmentResponses(this.assessmentResponses)
    .subscribe(
      data => {
        this.addSuccess("Success.","Assessment submitted successfully.");
  },
  error => {
    this.addError("Unsuccessful.","Assessment could not be submitted successfully.");
    });
  }
  else{
    this.addError("Unsuccessful.","You must make at least one selection.");
  } 
      
    
  }
  position: string;
confirmSaveAssessment(position: string){
  this.position = position;
  this.confirmationService.confirm({
    message: 'Do you want to submit the responses for <b>'+this.selectedAssessmentType.name+'?',
    header: 'Submit Assessment',
    icon: 'pi pi-info-circle',
    accept: () => {
      this.saveResponses();
    },
    reject: () => {
      this.addSuccess("Cancelled.","Action cancelled or suspended.");
    },
    key: "positionDialog"
});
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



