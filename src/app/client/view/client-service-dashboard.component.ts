import { Component, OnInit,ViewChild } from '@angular/core';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
//import dayGridPlugin from '@fullcalendar/daygrid';
//import timeGridPlugin from '@fullcalendar/timegrid';
//import interactionPlugin from '@fullcalendar/interaction';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {ClientPortalService} from '../service/client.portal.service';
import { ClientExtendedInfo } from '../domain/client.portal.data';
import {ManageAllergiesService} from '../../administration/service/manage.allergies.service'
import { AllergiesData } from 'src/app/administration/domain/allergies.data';
@Component({
  selector: 'app-client-service-dashboard',
  templateUrl: './client-service-dashboard.component.html',
  styleUrls: ["./client-service-dashboard.component.scss"]
})
export class ClientServiceDashboardComponent implements OnInit {
  viewedClient: ClientExtendedInfo;
  events: any[];
  options: any;
  header: any;
  eventDialog: boolean;
  changedEvent: any;
  clickedEvent = null;

  allergyDialog: boolean;
  allergyMap: AllergiesData[];
 
 
  constructor(private clientPortalService:ClientPortalService,
              private manageAllergiesService: ManageAllergiesService) { 
  
  }
  userActionOptions: MenuItem[];
  userProgramOptions: MenuItem[];

  ngOnInit(): void {
    this.viewedClient = this.clientPortalService.selectedClients;
          this.userActionOptions = [
              {
                  label: 'Bio',
                  items: [{
                      label: 'Edit Info',
                      icon: 'pi pi-refresh',
                      command: () => {
                         // this.update();
                      }
                  },
                  {
                      label: 'Inactivate Client',
                      icon: 'pi pi-times',
                      command: () => {
                         // this.delete();
                      }
                  }
              ]},
              {
                  label: 'Programs',
                  items: [{
                      label: 'Active Programs',
                      icon: 'pi pi-external-link',
                     // url: 'http://angular.io'
                  },
                  {
                      label: 'Transfer Client',
                      icon: 'pi pi-upload',
                      routerLink: '/fileupload'
                  }
              ]},
              {
                  label: 'Contact Client',
                  items: [{
                      label: 'SMS',
                      icon: 'pi pi-external-link',
                     // url: 'http://angular.io'
                  },
                  {
                      label: 'Email',
                      icon: 'pi pi-upload',
                      routerLink: '/fileupload'
                  }
              ]}
          ];
      
          this.userProgramOptions = [
            {
                label: 'Informatics',
                items: [{
                    label: 'View BMI',
                    icon: 'pi pi-refresh',
                    command: () => {
                       // this.update();
                    }
                },
                {
                    label: 'View Temp',
                    icon: 'pi pi-times',
                    command: () => {
                       // this.delete();
                    }
                },
                {
                    label: 'Reactions',
                    icon: 'pi pi-times',
                    command: () => {
                       // this.delete();
                    }
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
     this.manageAllergiesService.getAllergiess().subscribe(p => {this.allergyMap = p});

  }
 goToAddDialog(dialog: string){
   if(dialog === 'allergy'){
   this.allergyDialog = true;
   }
 }
}
