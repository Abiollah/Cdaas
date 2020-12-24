import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';
import { ClientData } from '../domain/client.data';
import {ManageClientService} from '../service/manage.client.service';
import { Location } from '@angular/common';
import {MessageService,TreeNode} from 'primeng/api';
import { Router } from '@angular/router';
import { jqxTreeComponent } from 'jqwidgets-ng/jqxtree';
import { GenderData } from '../../administration/domain/gender.data';
import { ManageGendersService } from 'src/app/administration/service/manage.genders.service';
import { MetadataConfigService } from 'src/app/administration/service/metadata-config.service';
import { MaritalStatusData } from 'src/app/administration/domain/maritalstatus.data';
import { OccupationData } from 'src/app/administration/domain/occupation.data';
import { QualificationData } from 'src/app/administration/domain/qualification.data';
import { HeirarchyUnitsData, hpak } from 'src/app/administration/domain/heirarchyunits.data';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-patient.registration',
  templateUrl: './client.registration.component.html',
  providers:[MessageService]
 // styleUrls: ['./patient.registration.component.scss']

})
export class ClientRegistrationComponent implements OnInit {
  @ViewChild('heirarchyUnitId', { static: false }) heirarchyUnitId: jqxTreeComponent;
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
  heirarchyunitsTree:any[];
 
  source: any;
  records: any;
  dataAdapter: any;


  



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
    this.buildHeirarchyTree();
  }
  
  
  private buildHeirarchyTree(){
    
    this.source = {
      datatype: 'json',
      datafields: [
          { name: 'heirarchyunitid' },
          { name: 'parentid' },
          { name: 'name' }
          
      ],
      id: 'heirarchyunitid',
      localdata: this.heirarchyunitsMap
  };
  this.dataAdapter = new jqx.dataAdapter(this.source, { autoBind: true });
  this.records = this.dataAdapter.getRecordsHierarchy('heirarchyunitid', 'parentid', 'items', 
  [{ name: 'name', map: 'label' },
  { name: 'heirarchyunitid', map: 'value' }]);

  }

  heirarchyOnSelect(event: any): void{
    this.clientcreatedata.facility_name = this.heirarchyUnitId.getItem(event.args.element).label;
    this.clientcreatedata.facility_id = +this.heirarchyUnitId.getItem(event.args.element).value;

    console.log("Got selected as "+this.heirarchyUnitId.getItem(event.args.element).value);
    this.facilityDialog=false;
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



