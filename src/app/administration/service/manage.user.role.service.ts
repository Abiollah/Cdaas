import { Injectable,isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserRoleData } from '../domain/user.role.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageUserRoleService {

  constructor(private http: HttpClient) { }

  createUpdateUserRole(data): Observable<any>{
    console.log(data);
    return this.http.post<UserRoleData>(this.getBaseApiUrl()+'postuserrole',data);
  }

   getUserRole():Observable<any>{
    return this.http.get<UserRoleData>(this.getBaseApiUrl()+'listuserrole');

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




