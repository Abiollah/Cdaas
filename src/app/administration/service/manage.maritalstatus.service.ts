import { Injectable,isDevMode} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MaritalStatusData } from '../domain/maritalstatus.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageMaritalstatusService {

  constructor(private http: HttpClient) { }

  createMaritalStatus(data): Observable<any>{
    console.log(data);
    return this.http.post<MaritalStatusData>(this.getBaseApiUrl()+'postmaritalstatus',data);
  }

  getMaritalStatuss():Observable<any>{
    return this.http.get<MaritalStatusData>(this.getBaseApiUrl()+'listmaritalstatus');
  }

  updateMaritalStatus(data){
    return this.http.post<MaritalStatusData>(this.getBaseApiUrl()+'postmaritalstatus',data);
  }

  getMaritalStatus() {
    return this.http.get<any>(this.getBaseApiUrl()+'listmaritalstatus')
    .toPromise()
    .then(res => res.data as MaritalStatusData)
    .then(data => data);
}
  private getBaseApiUrl(): string {
    return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
    }
}
