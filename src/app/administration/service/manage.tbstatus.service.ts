import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TbstatusData } from '../domain/tbstatus.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageTbstatusService {

  constructor(private http: HttpClient) { }

  createUpdateTbstatus(data): Observable<any>{
    console.log(data);
    return this.http.post<TbstatusData>(this.getBaseApiUrl()+'posttbstatus',data);
  }

  getTbstatuss():Observable<any>{
    return this.http.get<TbstatusData>(this.getBaseApiUrl()+'listtbstatus');
  }

  updateTbstatus(data){
    return this.http.post<TbstatusData>(this.getBaseApiUrl()+'posttbstatus',data);
  }

  getTbstatus() {
    return this.http.get<any>(this.getBaseApiUrl()+'listtbstatus')
    .toPromise()
    .then(res => res.data as TbstatusData)
    .then(data => data);
}

private getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}

