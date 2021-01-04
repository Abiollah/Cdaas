import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RefferedfromData } from '../domain/refferedfrom.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageRefferedfromService {

  constructor(private http: HttpClient) { }

  createUpdateRefferedfrom(data): Observable<any>{
    console.log(data);
    return this.http.post<RefferedfromData>(this.getBaseApiUrl()+'postrefferedfrom',data);
  }

  getRefferedfroms():Observable<any>{
    return this.http.get<RefferedfromData>(this.getBaseApiUrl()+'listrefferedfrom');
  }

  updateRefferedfrom(data){
    return this.http.post<RefferedfromData>(this.getBaseApiUrl()+'postrefferedfrom',data);
  }

  getRefferedfrom() {
    return this.http.get<any>(this.getBaseApiUrl()+'listrefferedfrom')
    .toPromise()
    .then(res => res.data as RefferedfromData)
    .then(data => data);
}

private getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}


