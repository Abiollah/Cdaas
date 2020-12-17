import { Injectable, isDevMode} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ClientData } from '../domain/client.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageClientService {

  constructor(private http: HttpClient) { }

  createUpdateClient(data): Observable<any>{
    console.log(data);
    return this.http.post<ClientData>(this.getBaseApiUrl()+'postclinicalregistration',data);
  }

    getClient():Observable<any>{
      return this.http.get<ClientData>(this.getBaseApiUrl()+'listclinicalregistration');
    }
    updateClient(data){
      return this.http.post<ClientData>(this.getBaseApiUrl()+'postclinicalregistration',data);
    }
    getClients() {
      return this.http.get<any>(this.getBaseApiUrl()+'listclinicalregistration')
      .toPromise()
      .then(res => res.data as ClientData)
      .then(data => data);
  }
  private getBaseApiUrl(): string {
    return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
    }

}













