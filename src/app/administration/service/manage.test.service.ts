import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TestData } from '../domain/test.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageTestService {

  constructor(private http: HttpClient) { }

  createTest(data): Observable<any>{
    console.log(data);
    return this.http.post<TestData>(this.getBaseApiUrl()+'posttest',data);
  }

  getTests():Observable<any>{
    return this.http.get<TestData>(this.getBaseApiUrl()+'listtest');
  }

 

protected getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
