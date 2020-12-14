import { Injectable,isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ClientExtendedInfo } from '../domain/client.portal.data';


@Injectable({
  providedIn: 'root'
})
export class ClientPortalService {

  constructor(private http: HttpClient) { }


getClientExtendedInfo():Observable<any>{
  return this.http.get<ClientExtendedInfo>(this.getBaseApiUrl()+'listclinicalregistrations');
}


  private getBaseApiUrl(): string {
    return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
    }

}
