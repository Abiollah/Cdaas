import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';
import { TesttypeData } from '../domain/testtype.data';
import { TesttypeService } from '../service/testtype.service';
import { GenderlistComponent } from '../view/genderlist.component';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-testtype',
  templateUrl: './add-testtype.component.html',
  styleUrls: ['./add-testtype.component.scss'],
  providers: [MessageService]
})
export class AddTesttypeComponent implements OnInit {

  testtype = {} as TesttypeData;


  constructor(private messageService: MessageService, private router: Router, private location: Location, private testtypeservice: TesttypeService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'METADATA', routerLink: ['/metadatalist'] },
      { label: 'Test Type', routerLink: ['/testtypelist'] }]);
  }

  ngOnInit(): void {
  /*if(sessionStorage.getItem('username') == null){
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }*/
  }
  addTesttype() {
    this.testtype.created_by = +sessionStorage.getItem('userid');
    this.testtype.created_date = Date.now ();
    this.testtypeservice.createTesttype(this.testtype).subscribe(
      data => {
        this.addSuccess("Success!", "Testtype added successfully.");
      },
      error => {
        this.addError("Failed!", "Could not add testtype.");
      }

    );
  }

  goBack() {
    this.location.back();
  }

  addSuccess(title: string, message: string) {
    this.messageService.add({ severity: 'success', summary: title, detail: message });


  }
  addError(title: string, message: string) {
    this.messageService.add({ severity: 'error', summary: title, detail: message });

  }


}

