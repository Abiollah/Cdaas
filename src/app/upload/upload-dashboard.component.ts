import { Component, OnInit } from '@angular/core';
import {MessageService, MenuItem,LazyLoadEvent} from 'primeng/api';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-upload-dashboard',
  templateUrl: './upload-dashboard.component.html',
  styleUrls: ['./upload-dashboard.component.scss'],
  providers: [MessageService]
})
export class UploadDashboardComponent implements OnInit {
  selectedDrop: SelectItem;
  providers: SelectItem[];
  userActionOptions: MenuItem[];
  created_date: Date;
  maxDate: Date;
  minDate: string;
  curYear: string;

  constructor() { }

  ngOnInit(): void {

    this.providers = [
      {label: 'Central bank Of Nigeria', value: {id: 1, name: 'Central Bank', code: 'NY'}},
      {label: 'Switches', value: {id: 2, name: 'Rome', code: 'RM'}},
      {label: 'Third Party Processors', value: {id: 3, name: 'London', code: 'LDN'}},
      {label: 'Payment Terminal Service Providers', value: {id: 4, name: 'Istanbul', code: 'IST'}},
      {label: 'Card Schemes', value: {id: 5, name: 'Paris', code: 'PRS'}},
      {label: 'Super Agents', value: {id: 3, name: 'London', code: 'LDN'}},
      {label: 'Mobile Money Operators', value: {id: 4, name: 'Istanbul', code: 'IST'}}
  ];
  }

}
