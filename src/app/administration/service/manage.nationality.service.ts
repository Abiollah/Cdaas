import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NationalityData } from '../domain/nationality.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageNationalityService {

  constructor(private http: HttpClient) { }
  createNationality(data): Observable<any>{
    console.log(data);
    return this.http.post<NationalityData>(this.getBaseApiUrl()+'postnationalities',data);
  }

  getNationalitys():Observable<any>{
    return this.http.get<NationalityData>(this.getBaseApiUrl()+'listnationalities');
  }

  

protected getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}


