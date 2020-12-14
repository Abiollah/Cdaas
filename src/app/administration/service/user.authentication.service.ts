import { Injectable, isDevMode } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserData } from '../domain/users.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private http: HttpClient) { }

getUserByUsernamePassword(username:string,password:string): Observable<any> {
 //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.http.get<UserData>(this.getBaseApiUrl()+'userlogin?username='+username+'&password='+password);
}
userLogin(data): Observable<any>{
  console.log(data);
  return this.http.post<UserData>(this.getBaseApiUrl()+'ulogin',data);
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

private getBaseApiUrl(): string {
return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
}

}
