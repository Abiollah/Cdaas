import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { RelationshipData } from '../domain/relationship.data';
import {ManageRelationshipService} from '../service/manage.relationship.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-add.relationship',
  templateUrl: './add.relationship.component.html',
  styleUrls: ['./add.relationship.component.scss'],
  providers: [MessageService]
})
export class ManageRelationshipComponent implements OnInit {

  relationshipcreatedata = {} as RelationshipData;

  

  constructor(private router: Router,private messageService: MessageService,private location: Location,private managerelationshipService:ManageRelationshipService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Relationship', routerLink: ['/addRelationshiplist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

addRelationship(){
  this.relationshipcreatedata.created_by = +sessionStorage.getItem("userid");
  this.relationshipcreatedata.created_date = new Date();
  this.managerelationshipService.createRelationship(this.relationshipcreatedata).subscribe(
    data => {
      this.addSuccess("Success!","Relationship added successfully.");
  }, 
  error => {
  this.addError("Failed!","Could not add Relationship.");
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
  
