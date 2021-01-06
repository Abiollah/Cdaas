import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { RelationshipData } from '../domain/relationship.data';
import {RelationshipService} from '../service/relationship.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

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

  constructor(private messageService: MessageService, private router: Router, private location: Location, private relationshipservice:RelationshipService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'METADATA', routerLink: ['/metadatalist'] },
      { label: 'RELATIONSHIP', routerLink: ['/relationshiplist'] }    ]);
   }

  ngOnInit(): void {
    this.RelationshipList();
  }

  RelationshipList():void{
    this.relationshipservice.getRelationship().subscribe(data => {
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
      let hold = this.selectedRelationship = {...relationship};
      this.relationshipDialog=true;
      console.log(hold)
     }

     updateRelationship(){
      this.relationshipservice.createRelationship(this.selectedRelationship).subscribe(
        response => {console.log(response);
          this.relationshipList.push(this.selectedRelationship);
          this.ngOnInit();
          this.addSuccess("Success!","Relationship updated successfully"); 
          console.log(this.selectedRelationship);
      }, 

     error => {console.log(error)});
      this.addError("Failed!","Relationaship creation failed.");

      this.relationshipDialog = false;
    }

    addSuccess(title:string,message:string) {
      this.messageService.add({severity:'success', summary:title, detail:message});
      
    
    }
    addError(title:string,message:string) {
      this.messageService.add({severity:'error', summary:title, detail:message});
      
    }

    hideRelationshipDialog(){
      this.relationshipDialog = false;
    }


}
