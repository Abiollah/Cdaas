import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';
import { ClientData } from '../domain/client.data';
import {ManageClientService} from '../service/manage.client.service';
import { Location } from '@angular/common';
import {MessageService,TreeNode} from 'primeng/api';
import {TreeModule} from 'primeng/tree';
import { Router } from '@angular/router';
import { GenderData } from '../../administration/domain/gender.data';
import { ManageGendersService } from 'src/app/administration/service/manage.genders.service';
import { MetadataConfigService } from 'src/app/administration/service/metadata-config.service';
import { MaritalStatusData } from 'src/app/administration/domain/maritalstatus.data';
import { OccupationData } from 'src/app/administration/domain/occupation.data';
import { QualificationData } from 'src/app/administration/domain/qualification.data';
import { HeirarchyUnitsData, hpak } from 'src/app/administration/domain/heirarchyunits.data';

@Component({
  selector: 'app-patient.registration',
  templateUrl: './client.registration.component.html',
  providers:[MessageService]
 // styleUrls: ['./patient.registration.component.scss']

})
export class ClientRegistrationComponent implements OnInit {

  clientcreatedata = {} as  ClientData;
  facilityDialog: boolean;
  
  genderMap: GenderData[];
  selectedGender: GenderData;
  maritalstatusMap: MaritalStatusData[];
  selectedMaritalStatus: MaritalStatusData[];
  occupationMap: OccupationData[];
  selectedOccupation: OccupationData;
  qualificationMap: QualificationData[];
  selectedQualification: QualificationData;
  heirarchyunitsMap: HeirarchyUnitsData[];
  selectedHeirarchyUnit: HeirarchyUnitsData;

  
  

  heirarchyunitsTree: TreeNode[];
  heirarchyunitsChildrenTree: TreeNode[];
  selectedHeirarchyUnits: TreeNode;
  
  hu: HeirarchyUnitsData[][];
  
  data: HeirarchyUnitsData[] = [];

  _object = Object;

  responseData: any = [
    {
        "id": 2,
        "parentid": 0,
        "name": "TR"
        
    },
    {
      "id": 3,
      "parentid": 2,
        "name": "CR1"
     },
    {
      "id": 4,
        "parentid": 2,
        "name": "CR2"
     },
    {
      "id": 5,
        "parentid": 3,
        "name": "CCR1",
           },
    {
      "id": 6,
        "parentid": 2,
        "name": "CR3",
     },
    {
      "id": 7,
        "parentid": 6,
        "name": "CCR2",
           },
    {
      "id": 8,
        "parentid": 7,
        "name": "CCCR1",
          },
    {
      "id": 9,
        "parentid": 8,
        "name": "CCCCR1",
           },
    {
      "id": 11,
        "parentid": 2,
               "name": "CR5",
           },
    {
      "id": 12,
        "parentid": 11,
        "name": "CCCCCCR1",
            }
]



  constructor(private router: Router,
   private messageService: MessageService,
    private location: Location,
    private manageclientService:ManageClientService, 
    private breadcrumbService: AppBreadcrumbService,
    private manageGenderService: ManageGendersService,
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

  }
  loadHeirarchyUnits(){
    this.facilityDialog=true;
   this.HTree();
  }
  
  
  
  private HTree(){
    this.recursiveList(0);

  }

  private recursiveList(id:number){
    var heirarchyUnitSubList: HeirarchyUnitsData[] = [];
    heirarchyUnitSubList = this.HeirarchyUnitSubList(id);


    for (var hus of heirarchyUnitSubList){
     this.heirarchyunitsTree = [{
       label: hus.name,
       data: hus.heirarchyunitid,
       "children" : [
         {
          label: hus.name,
          data: hus.heirarchyunitid,
       }
      ]
      }
     
    ]
    this.recursiveList(hus.heirarchyunitid);
    }
    
    
  }

HeirarchyUnitSubList(i: number): HeirarchyUnitsData[] {
  var heirarchyUnitSubList2: HeirarchyUnitsData[] = [];
  
  if (this.heirarchyunitsMap.length > 0){
    for(var pp of this.heirarchyunitsMap){
      if(pp.parentid == i){
       heirarchyUnitSubList2.push(pp);
       
      }
      
    }
    
  }
 
  return heirarchyUnitSubList2;
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



