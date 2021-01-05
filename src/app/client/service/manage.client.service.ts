import { Injectable, isDevMode} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ClientData } from '../domain/client.data';
import { environment } from '../../../environments/environment';
import { AssessmentResponses } from 'src/app/administration/domain/assessments.data';


@Injectable({
  providedIn: 'root'
})
export class ManageClientService {

  constructor(private http: HttpClient) { }

  createClient(data): Observable<any>{
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
      return this.http.get<any>(`${environment.apiBaseUrl}`+'listclinicalregistration')
      .toPromise()
      .then(res => res.data as ClientData)
      .then(data => data);
  }

  createUpdateAssessmentResponses(data): Observable<any>{
    console.log(data);
    return this.http.post<AssessmentResponses>(`${environment.apiBaseUrl}`+'postassessmentresponses',data);
  }

  private getBaseApiUrl(): string {
    return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
    }

}













