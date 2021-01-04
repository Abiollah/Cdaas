import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { QualificationData } from '../domain/qualification.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageQualificationService {

  constructor(private http: HttpClient) { }

  createQualification(data): Observable<any>{
    console.log(data);
    return this.http.post<QualificationData>(this.getBaseApiUrl()+'postqualifications',data);
  }

  getQualifications():Observable<any>{
    return this.http.get<QualificationData>(this.getBaseApiUrl()+'listqualifications');
  }
  protected getBaseApiUrl(): string {
    return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
    }
}


