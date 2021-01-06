import { Injectable,isDevMode} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { StatusTypeData } from '../domain/statustype.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageStatusStyleService {

  constructor(private http: HttpClient) { }

  createStatustype(data): Observable<any>{
    console.log(data);
    return this.http.post<StatusTypeData>(this.getBaseApiUrl()+'poststatustype',data);
  }

  getStatustype():Observable<any>{
    return this.http.get<StatusTypeData>(this.getBaseApiUrl()+'liststatustype');
  }

   

  protected getBaseApiUrl(): string {
    return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
    }
}
