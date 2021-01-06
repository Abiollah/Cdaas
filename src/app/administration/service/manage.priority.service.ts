import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PriorityData } from '../domain/priority.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManagePriorityService {

  constructor(private http: HttpClient) { }

  createPriority(data): Observable<any>{
    console.log(data);
    return this.http.post<PriorityData>(this.getBaseApiUrl()+'postpriority',data);
  }

  getPrioritys():Observable<any>{
    return this.http.get<PriorityData>(this.getBaseApiUrl()+'listpriority');
  }

  

protected getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
