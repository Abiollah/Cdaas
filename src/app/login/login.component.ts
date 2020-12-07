import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ButtonModule} from 'primeng/button';
@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html'
})
export class UserLoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
  }

  userLogin() : void {
    this.router.navigate(['dashboard']);
  }

}
