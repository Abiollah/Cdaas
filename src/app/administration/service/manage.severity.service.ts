import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SeverityData } from '../domain/severity.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageSeverityService {

  constructor(private http: HttpClient) { }

  createUpdateSeverity(data): Observable<any>{
    console.log(data);
    return this.http.post<SeverityData>(this.getBaseApiUrl()+'postseverity',data);
  }

  getSeveritys():Observable<any>{
    return this.http.get<SeverityData>(this.getBaseApiUrl()+'listseverity');
  }

  updateSeverity(data){
    return this.http.post<SeverityData>(this.getBaseApiUrl()+'postseverity',data);
  }

  getSeverity() {
    return this.http.get<any>(this.getBaseApiUrl()+'listseverity')
    .toPromise()
    .then(res => res.data as SeverityData)
    .then(data => data);
}

private getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}

