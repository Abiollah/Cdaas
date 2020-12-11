import { Injectable,isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserRoleData } from '../domain/user.role.data';
import { environment } from '../../../environments/environment';


<<<<<<< HEAD
const apiBaseUrl = "http://192.168.1.149:8080/api/v1/";
=======
>>>>>>> 23b2671c3f524ee1e094cfa0438af3b285997a91
@Injectable({
  providedIn: 'root'
})
export class ManageUserRoleService {

  constructor(private http: HttpClient) { }

  createUpdateUserRole(data): Observable<any>{
    console.log(data);
    return this.http.post<UserRoleData>(this.getBaseApiUrl()+'postuserrole',data);
  }
<<<<<<< HEAD
   getUserRole():Observable<any>{
    return this.http.get<UserRoleData>(apiBaseUrl+'listuserrole');
=======
  createUserRole(data): Observable<any>{
    console.log(data);
    return this.http.post<UserRoleData>(this.getBaseApiUrl()+'postuserrole',data);
  }

  getUserRole():Observable<any>{
    return this.http.get<UserRoleData>(this.getBaseApiUrl()+'listuserrole');
>>>>>>> 23b2671c3f524ee1e094cfa0438af3b285997a91
  }

  private getBaseApiUrl(): string {
    return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
    }
  updateUserRole(data){
    return this.http.post<UserRoleData>(this.getBaseApiUrl()+'postuserrole',data);
  }

  getUserRoles() {
    return this.http.get<any>(this.getBaseApiUrl()+'listuserrole')
    .toPromise()
    .then(res => res.data as UserRoleData)
    .then(data => data);
}
}




