import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CareEntryPointData } from '../domain/careentrypoint.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageCareentrypointService {

  constructor(private http: HttpClient) { }
  createUpdateCareEntryPoint(data): Observable<any>{
    console.log(data);
    return this.http.post<CareEntryPointData>(this.getBaseApiUrl()+'postcareentrypoints',data);
  }

  getCareEntryPoints():Observable<any>{
    return this.http.get<CareEntryPointData>(this.getBaseApiUrl()+'listcareentrypoints');
  }

  updateCareEntryPoint(data){
    return this.http.post<CareEntryPointData>(this.getBaseApiUrl()+'postcareentrypoints',data);
  }

  getCareEntryPoint() {
    return this.http.get<any>(this.getBaseApiUrl()+'listcareentrypoints')
    .toPromise()
    .then(res => res.data as CareEntryPointData)
    .then(data => data);
}

private getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
