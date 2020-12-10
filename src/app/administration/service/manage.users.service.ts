import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserData } from '../domain/users.data';

const apiBaseUrl = "http://localhost:4040/api/v1/";
@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {
  

  constructor(private http: HttpClient) { }

  createUser(data): Observable<any>{
    console.log(data);
    return this.http.post<UserData>(apiBaseUrl+'postusers',data);
  }

  getUsers():Observable<any>{
    return this.http.get<UserData>(apiBaseUrl+'listusers');
  }
}
