import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RelationshipData } from '../domain/relationship.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageRelationshipService {

  constructor(private http: HttpClient) { }

  createRelationship(data): Observable<any>{
    console.log(data);
    return this.http.post<RelationshipData>(this.getBaseApiUrl()+'postrelationship',data);
  }

  getRelationships():Observable<any>{
    return this.http.get<RelationshipData>(this.getBaseApiUrl()+'listrelationships');
  }

protected getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}

