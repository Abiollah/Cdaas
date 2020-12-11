import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { UserData } from '../administration/domain/users.data';
import { UserAuthenticationService } from '../administration/service/user.authentication.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  providers: [MessageService]
})
export class UserLoginComponent implements OnInit {
  error: any;
  headers: string[];
  
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

  userLogin() : void {
    /*const data = {
      username: this.userdata.username,
      password: this.userdata.password
    };*/
    this.authservice.getUserByUsernamePassword(this.userdata.username,this.userdata.password)
    .subscribe((data: UserData) => this.userdata = {...data}, 
    response => {
      console.log(response)
    },
    
     );
    if(this.userdata.loginstatus){
      this.router.navigate(['dashboard']);
      }
      if(!this.userdata.loginstatus){
        this.router.navigate(['']);

        this.addError("Login Failed.","Invalid username/password");
       
       // alert("Invalid username/password. "+ this.userdata.loginstatus);
        
      }
  }

  addSuccess(title:string,message:string) {
    this.messageService.add({severity:'success', summary:title, detail:message});
  }
  addError(title:string,message:string) {
    this.messageService.add({severity:'error', summary:title, detail:message});
  }

}
