import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { EnrollmentSettingData } from '../domain/enrollmentsetting.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageEnrollmentSettingService {

  constructor(private http: HttpClient) { }

  createUpdateEnrollmentSetting(data): Observable<any>{
    console.log(data);
    return this.http.post<EnrollmentSettingData>(this.getBaseApiUrl()+'postenrollmentsetting',data);
  }

  getEnrollmentSettings():Observable<any>{
    return this.http.get<EnrollmentSettingData>(this.getBaseApiUrl()+'listenrollmentsetting');
  }

  updateEnrollmentSetting(data){
    return this.http.post<EnrollmentSettingData>(this.getBaseApiUrl()+'postenrollmentsetting',data);
  }

  getEnrollmentSetting() {
    return this.http.get<any>(this.getBaseApiUrl()+'listenrollmentsetting')
    .toPromise()
    .then(res => res.data as EnrollmentSettingData)
    .then(data => data);
}

private getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
