import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserData } from '../domain/users.data';
<<<<<<< HEAD


=======
import { environment } from '../../../environments/environment';
>>>>>>> 23b2671c3f524ee1e094cfa0438af3b285997a91

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
<<<<<<< HEAD

  apiBaseUrl = "http://192.168.1.149:8080/api/v1/";

=======
  
>>>>>>> 23b2671c3f524ee1e094cfa0438af3b285997a91
  constructor(private http: HttpClient) { }

getUserByUsernamePassword(username:string,password:string): Observable<any> {

  return this.http.get<UserData>(this.getBaseApiUrl()+'userlogin?username='+username+'&password='+password);
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

private getBaseApiUrl(): string {
return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
}

}
