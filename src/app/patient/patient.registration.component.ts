import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../app.breadcrumb.service';
@Component({
  selector: 'app-patient.registration',
  templateUrl: './patient.registration.component.html',
 // styleUrls: ['./patient.registration.component.scss']

})
export class PatientComponent implements OnInit {

  constructor(
    private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
        { label: 'Dashboard', routerLink: ['/dashboard'] },
        { label: 'Register KP', routerLink: ['/registration'] }
    ]);
}

  ngOnInit(): void {
  }

}
