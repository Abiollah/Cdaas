import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserRoleData } from '../domain/user.role.data';

const apiBaseUrl = "http://localhost:4040/api/v1/";
@Injectable({
  providedIn: 'root'
})
export class ManageUserRoleService {

  constructor(private http: HttpClient) { }
  createUserRole(data): Observable<any>{
    console.log(data);
    return this.http.post<UserRoleData>(apiBaseUrl+'postuserrole',data);
  }

  getUserRole():Observable<any>{
    return this.http.get<UserRoleData>(apiBaseUrl+'listuserrole');
  }
}


