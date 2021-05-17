import { Component, OnInit } from '@angular/core';
import {MessageService, MenuItem,LazyLoadEvent} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mmo-form',
  templateUrl: './mmo-form.component.html',
  styleUrls: ['./mmo-form.component.scss'],
  providers: [MessageService]
})
export class MmoFormComponent implements OnInit {
  selectedDrop: SelectItem;
  transactionTypeCode: SelectItem[];
  transactionType: SelectItem[];
  selectedFormat: SelectItem[];
  userActionOptions: MenuItem[];
  created_date: Date;
  maxDate: Date;
  minDate: string;
  curYear: string;


  reportDialog: boolean;
  reportEditDialog: boolean;
  reportImportDialog: boolean;

  constructor() { }

  ngOnInit(): void {
    this.transactionTypeCode = [
      {label: 'MMT001', value: {id: 1, name: 'Central Bank', code: 'NY'}},
      {label: 'MMT002', value: {id: 2, name: 'Rome', code: 'RM'}},
      {label: 'MMT003', value: {id: 3, name: 'London', code: 'LDN'}},
      {label: 'MMT004', value: {id: 4, name: 'Istanbul', code: 'IST'}},
      {label: 'MMT005', value: {id: 5, name: 'Paris', code: 'PRS'}},
      {label: 'MMT040', value: {id: 3, name: 'London', code: 'LDN'}},
      {label: 'MMT041', value: {id: 4, name: 'Istanbul', code: 'IST'}},
      {label: 'MMT042', value: {id: 3, name: 'London', code: 'LDN'}},
      {label: 'MMT043', value: {id: 4, name: 'Istanbul', code: 'IST'}}
  ];

  this.transactionType = [
    {label: 'Cash-In', value: {id: 1, name: 'Central Bank', code: 'NY'}},
    {label: 'Fund Transfers', value: {id: 2, name: 'Rome', code: 'RM'}},
    {label: 'Bill Payments', value: {id: 3, name: 'London', code: 'LDN'}},
    {label: 'Airtime', value: {id: 4, name: 'Istanbul', code: 'IST'}},
    {label: 'Cash-Out', value: {id: 5, name: 'Paris', code: 'PRS'}},
    {label: 'New Agents recruited', value: {id: 3, name: 'London', code: 'LDN'}},
    {label: 'New Wallet Subscribers ', value: {id: 4, name: 'Istanbul', code: 'IST'}},
    {label: 'Lost/Terminated Agents', value: {id: 3, name: 'London', code: 'LDN'}},
    {label: 'InActive subscribers * ', value: {id: 4, name: 'Istanbul', code: 'IST'}}
];

this.selectedFormat = [
  {label: '.csv', value: {id: 1, name: 'Central Bank', code: 'NY'}},
  {label: '.xml', value: {id: 2, name: 'Rome', code: 'RM'}},
  {label: '.json', value: {id: 3, name: 'London', code: 'LDN'}}
];
  }



  goToAddreport(){
    this.reportDialog=true;
  }

  importreport(){
    this.reportImportDialog=true;
  }

  editreport(){
  this.reportEditDialog=true;
 }


 hidereportDialog(){
  this.reportDialog = false;
}

hidereportEditDialog(){
  this.reportEditDialog = false;
}

}
