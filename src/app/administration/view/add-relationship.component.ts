import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { RelationshipData } from '../domain/relationship.data';
import {RelationshipService} from '../service/relationship.service';
import { RelationshiplistComponent } from '../view/relationshiplist.component';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-relationship',
  templateUrl: './add-relationship.component.html',
  styleUrls: ['./add-relationship.component.scss'],
  providers: [MessageService]
})
export class AddRelationshipComponent implements OnInit {

  relationship = {} as RelationshipData;


  constructor(private messageService: MessageService,private router: Router,private location: Location,private relationshipservice:RelationshipService, private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'METADATA', routerLink: ['/metadatalist'] },
      { label: 'RELATIONSHIP', routerLink: ['/relationshiplist'] }    ]);
  }

  ngOnInit(): void {
    /*if(sessionStorage.getItem('username') == null){
        this.addError("Session Expired.","Your current session has expired. Re-login.");
        this.router.navigate(['']);
      }*/
  }

  addRelationship(){
    this.relationship.created_by = +sessionStorage.getItem('userid');
    this.relationship.created_date= new Date();
    this.relationshipservice.createRelationship(this.relationship).subscribe(
    data => {
        this.addSuccess("Success!","Ralationship added successfully.");
    }, 
    error => {
    this.addError("Failed!","Could not add relationship.");
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
