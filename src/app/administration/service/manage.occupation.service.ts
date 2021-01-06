import { Injectable,isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OccupationData } from '../domain/occupation.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageOccupationService {

  constructor(private http: HttpClient) { }

  createOccupation(data): Observable<any>{
    console.log(data);
    return this.http.post<OccupationData>(this.getBaseApiUrl()+'postoccupations',data);
  }

  getOccupations():Observable<any>{
    return this.http.get<OccupationData>(this.getBaseApiUrl()+'listoccupations');
  }

  

protected getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}


