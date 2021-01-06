import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';
import { TesttypeData } from '../domain/testtype.data';
import { TesttypeService } from '../service/testtype.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService, Message } from 'primeng/api';

@Component({
  selector: 'app-testtypelist',
  templateUrl: './testtypelist.component.html',
  styleUrls: ['./testtypelist.component.scss'],
  providers: [MessageService]
})
export class TesttypelistComponent implements OnInit {
  testtypeList: any;
  selectedTesttype: TesttypeData;
  testtypeDialog: boolean;

  constructor(private messageService: MessageService, private router: Router, private location: Location, private testtypeservice: TesttypeService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/dashboard'] },
      { label: 'Meta-data', routerLink: ['/metadatalist'] },
      { label: 'Test Type', routerLink: ['/testtypelist'] }]);
  }
  ngOnInit(): void {
    this.TesttypeList();
  }
  TesttypeList(): void {
    this.testtypeservice.getTesttype().subscribe(data => {
      this.testtypeList = data;
      console.log(data);
    }
    );
  }
  goToAddTesttype() {
    this.router.navigate(['addtesttype']);
  }
  goBack() {
    this.location.back();
  }
  editTesttype(heirarchy: TesttypeData) {
    this.selectedTesttype = { ...heirarchy };
    this.testtypeDialog = true;
  }
  updateHeirarchy() {
    this.testtypeservice.createTesttype(this.selectedTesttype).subscribe(
      () => {
        this.addSuccess("Success!", "Heirarchy information updated successfully.");

      },
      () => {
        this.addError("Failed!", "Heirarchy creation failed.");
        this.testtypeDialog = false;
      });
  }

  addSuccess(title: string, message: string) {
    this.messageService.add({ severity: 'success', summary: title, detail: message });


  }
  addError(title: string, message: string) {
    this.messageService.add({ severity: 'error', summary: title, detail: message });

  }

  hideHeirarchyDialog() {
    this.testtypeDialog = false;
  }


}
