import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { StatusData } from '../domain/status.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageStatusService {

  constructor(private http: HttpClient) { }

  createStatus(data): Observable<any>{
    console.log(data);
    return this.http.post<StatusData>(this.getBaseApiUrl()+'poststatus',data);
  }

  getStatuss():Observable<any>{
    return this.http.get<StatusData>(this.getBaseApiUrl()+'liststatus');
  }

 

protected getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}

