import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { UserData } from '../administration/domain/users.data';
import { UserAuthenticationService } from '../administration/service/user.authentication.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  providers: [MessageService],
  
})
export class UserLoginComponent implements OnInit {
  error: any;
  headers: string[];
  loggedIn: boolean = false;
  
  userdata: UserData = {
    username: '',
    password: '',
    loginstatus: false,
    userid: 0,
    user_type_id:0


  }
   

  constructor(private messageService: MessageService, private authservice: UserAuthenticationService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
   
  }

  userLogin(): void {
    this.authservice.getUserByUsernamePassword(this.userdata.username,this.userdata.password)
    .subscribe(
    data => {
      if(!data.loginstatus){
        this.addError("Authentication Failed.","You are not authorized to use the application.");
        this.router.navigate(['']);
        this.loggedIn = false;
      }
      else{
      this.loadInitParam(data);
      this.router.navigate(['dashboard']);
      this.loggedIn = true;
      }
      
    },
    error => {
      this.addError("Authentication Failed.","Invalid username/password");
      this.loggedIn = false;
    }
    );
  }

  

  addSuccess(title:string,message:string) {
    this.messageService.add({severity:'success', summary:title, detail:message});
  }
  addError(title:string,message:string) {
    this.messageService.add({severity:'error', summary:title, detail:message});
  }

  loadInitParam(data){
      sessionStorage.setItem('username', data.username);
      sessionStorage.setItem('userid', data.userid);
  }

}
