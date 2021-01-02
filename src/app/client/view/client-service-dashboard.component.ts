import { Component, OnInit,ViewChild } from '@angular/core';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
//import dayGridPlugin from '@fullcalendar/daygrid';
//import timeGridPlugin from '@fullcalendar/timegrid';
//import interactionPlugin from '@fullcalendar/interaction';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-client-service-dashboard',
  templateUrl: './client-service-dashboard.component.html',
  
  styleUrls: ['./client-service-dashboard.component.scss']
})
export class ClientServiceDashboardComponent implements OnInit {
  events: any[];
  options: any;
  header: any;
  eventDialog: boolean;
  changedEvent: any;
  clickedEvent = null;
 
 
  constructor() { 
  
  }
  items: MenuItem[];

  ngOnInit(): void {
          this.items = [
              {
                  label: 'Options',
                  items: [{
                      label: 'Update',
                      icon: 'pi pi-refresh',
                      command: () => {
                         // this.update();
                      }
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-times',
                      command: () => {
                         // this.delete();
                      }
                  }
              ]},
              {
                  label: 'Navigate',
                  items: [{
                      label: 'Angular Website',
                      icon: 'pi pi-external-link',
                      url: 'http://angular.io'
                  },
                  {
                      label: 'Router',
                      icon: 'pi pi-upload',
                      routerLink: '/fileupload'
                  }
              ]}
          ];
      
  

    this.changedEvent = {title: '', start: null, end: '', allDay: null};
    this.options = {
     // plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
      defaultDate: '2017-02-01',
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      eventClick: (e) => {
          this.eventDialog = true;
          this.clickedEvent = e.event;
          this.changedEvent.title = this.clickedEvent.title;
          this.changedEvent.start = this.clickedEvent.start;
          this.changedEvent.end = this.clickedEvent.end;
      }
  };
  }

}
