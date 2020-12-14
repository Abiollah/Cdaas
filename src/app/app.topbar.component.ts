import { Component, OnInit } from '@angular/core';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})

export class AppTopBarComponent {

  constructor(private router: Router,public appMain: AppMainComponent, public app: AppComponent) { }

  
  logout(): void{
    sessionStorage.removeItem('username')
    this.router.navigate(['']);
  }
}
