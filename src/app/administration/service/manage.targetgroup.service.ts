import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TargetGroupData } from '../domain/targetgroup.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageTargetgroupService {

  constructor(private http: HttpClient) { }

createUpdateTargetgroup(data): Observable<any>{
    console.log(data);
    return this.http.post<TargetGroupData>(this.getBaseApiUrl()+'posttargetgroups',data);
  }

  getTargetgroups():Observable<any>{
    return this.http.get<TargetGroupData>(this.getBaseApiUrl()+'listtargetgroups');
  }

  updateTargetgroup(data){
    return this.http.post<TargetGroupData>(this.getBaseApiUrl()+'posttargetgroups',data);
  }

  getTargetgroup() {
    return this.http.get<any>(this.getBaseApiUrl()+'listtargetgroups')
    .toPromise()
    .then(res => res.data as TargetGroupData)
    .then(data => data);
}

private getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
