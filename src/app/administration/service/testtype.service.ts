
import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { TesttypeData } from '../domain/testtype.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TesttypeService {

  constructor(private http: HttpClient) { }

  createTesttype(data): Observable<any> {
    console.log(data);
    return this.http.post<TesttypeData>(this.getBaseApiUrl() + 'posttesttype', data);
  }

  getTesttype(): Observable<any> {
    return this.http.get<TesttypeData>(this.getBaseApiUrl() + 'listtesttype');
  }

  updateTesttype(data) {
    return this.http.post<TesttypeData>(this.getBaseApiUrl() + 'posttesttype', data);
  }

  getTesttypee() {
    return this.http.get<any>(this.getBaseApiUrl() + 'listtesttype')
      .toPromise()
      .then(res => res.data as TesttypeData)
      .then(data => data);
  }
  private getBaseApiUrl(): string {
    return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
