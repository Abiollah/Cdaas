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
  createCareEntryPoint(data): Observable<any>{
    console.log(data);
    return this.http.post<CareEntryPointData>(this.getBaseApiUrl()+'postcareentrypoint',data);
  }

  getCareEntryPoints():Observable<any>{
    return this.http.get<CareEntryPointData>(this.getBaseApiUrl()+'listcareentrypoint');
  }


protected getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
