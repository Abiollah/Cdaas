import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { RelationshipData } from '../domain/relationship.data';
import {ManageRelationshipService} from '../service/manage.relationship.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';

@Component({
  selector: 'app-relationshiplist',
  templateUrl: './relationshiplist.component.html',
  styleUrls: ['./relationshiplist.component.scss'],
  providers: [MessageService]
})
export class RelationshiplistComponent implements OnInit {
  relationshipList:any;
  selectedRelationship: RelationshipData;
  relationshipDialog: boolean;

  
  constructor(private messageService: MessageService,private router: Router,private location: Location,private managerelationshipService:ManageRelationshipService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'List Relationship', routerLink: ['/relationshiplist'] }    ]);
   }

  ngOnInit(): void {
    this.RelationshipList();
  }

  RelationshipList():void{
    this.managerelationshipService.getRelationships().subscribe(data => {
      this.relationshipList = data;
      console.log(data);
    }
    );
    }
      goToAddRelationship(){
        this.router.navigate(['addRelationship']);
      }
      goBack(){
        this.location.back();
      }
      editRelationship(relationship: RelationshipData){
      this.selectedRelationship = {...relationship};
      this.relationshipDialog=true;
     }
     updateRelationship(){
       this.managerelationshipService.createRelationship(this.selectedRelationship).subscribe(
        () => {
          this.addSuccess("Success!","Relationship information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Relationship creation failed.");
       this.relationshipDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.relationshipDialog = false;
     }
  

}
