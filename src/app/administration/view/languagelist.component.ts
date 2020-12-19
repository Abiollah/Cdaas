import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { LanguageData, LanguageDataCreate } from '../domain/language.data';
import {ManageLanguageService} from '../service/manage.language.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,Message} from 'primeng/api';


@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrls: ['./languagelist.component.scss'],
  providers: [MessageService]
})
export class LanguagelistComponent implements OnInit {
  languageList:any;
  selectedLanguage: LanguageData;
  languageDialog: boolean;

  constructor(private messageService: MessageService,private router: Router,private location: Location,private managelanguageService:ManageLanguageService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadata'] },
      { label: 'List Language', routerLink: ['/languagelist'] }    ]);
   }

  ngOnInit(): void {
    this.LanguageList();
  }

  LanguageList():void{
    this.managelanguageService.getLanguages().subscribe(data => {
      this.languageList = data;
      console.log(data);
    }
    );
    }
      goToAddLanguage(){
        this.router.navigate(['addLanguage']);
      }
      goBack(){
        this.location.back();
      }
      editLanguage(language: LanguageData){
      this.selectedLanguage = {...language};
      this.languageDialog=true;
     }
     updateLanguage(){
       this.managelanguageService.createUpdateLanguage(this.selectedLanguage).subscribe(
        () => {
          this.addSuccess("Success!","Language information updated successfully.");
             
       }, 
       () => {
       this.addError("Failed!","Language creation failed.");
       this.languageDialog = false;
     });
    }
 
     addSuccess(title:string,message:string) {
       this.messageService.add({severity:'success', summary:title, detail:message});
       
     
     }
     addError(title:string,message:string) {
       this.messageService.add({severity:'error', summary:title, detail:message});
       
     }
 
     hideUserDialog(){
       this.languageDialog = false;
     }
  

}



