import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TestgroupData } from '../domain/testgroup.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageTestgroupService {

  constructor(private http: HttpClient) { }

  createUpdateTestgroup(data): Observable<any>{
    console.log(data);
    return this.http.post<TestgroupData>(this.getBaseApiUrl()+'posttestgroup',data);
  }

  getTestgroups():Observable<any>{
    return this.http.get<TestgroupData>(this.getBaseApiUrl()+'listtestgroup');
  }

  updateTestgroup(data){
    return this.http.post<TestgroupData>(this.getBaseApiUrl()+'posttestgroup',data);
  }

  getTestgroup() {
    return this.http.get<any>(this.getBaseApiUrl()+'listtestgroup')
    .toPromise()
    .then(res => res.data as TestgroupData)
    .then(data => data);
}

private getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
