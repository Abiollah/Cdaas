import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { LanguageData, LanguageDataCreate } from '../domain/language.data';
import {ManageLanguageService} from '../service/manage.language.service';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add.language',
  templateUrl: './add.language.component.html',
  providers: [MessageService]
})
export class ManageLanguageComponent implements OnInit {

  languagecreatedata: LanguageData = {
    language_id:0,
  name: '',
  code: '',
  description: '',
  created_by:0,
  created_date: 0,

  };

  constructor(private router: Router,private messageService: MessageService,private location: Location,private managelanguageService:ManageLanguageService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Metadata', routerLink: ['/metadatalist'] },
      { label: 'Add Language', routerLink: ['/addLanguagelist'] }    ]);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }
  }

addLanguage(){
  this.languagecreatedata.created_by = +sessionStorage.getItem("userid");
  this.languagecreatedata.created_date = Date.now();
  this.managelanguageService.createUpdateLanguage(this.languagecreatedata).subscribe(
    data => {
      this.addSuccess("Success!","Language added successfully.");
  }, 
  error => {
  this.addError("Failed!","Could not add Language.");
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
  

