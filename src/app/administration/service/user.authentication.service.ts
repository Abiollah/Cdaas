import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserData } from '../domain/users.data';

 

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  apiBaseUrl = "http://localhost:4040/api/v1/";

  constructor(private http: HttpClient) { }

getUserByUsernamePassword(username:string,password:string): Observable<any> {
  console.log("Got username as "+username);
  return this.http.get<UserData>(this.apiBaseUrl+'userlogin?username='+username+'&password='+password);
  /*.pipe(retry(3),
  catchError(this.handleError)
  );*/
  
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
}

}
