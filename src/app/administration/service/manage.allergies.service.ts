import { Injectable,isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AllergiesData } from '../domain/allergies.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageAllergiesService {


  constructor(private http: HttpClient) { }

  createUpdateAllergies(data): Observable<any>{
    console.log(data);
    return this.http.post<AllergiesData>(this.getBaseApiUrl()+'postallergies',data);
  }

  getAllergiess():Observable<any>{
    return this.http.get<AllergiesData>(this.getBaseApiUrl()+'listallergies');
  }

  updateAllergies(data){
    return this.http.post<AllergiesData>(this.getBaseApiUrl()+'postallergies',data);
  }

  getAllergies() {
    return this.http.get<any>(this.getBaseApiUrl()+'listallergies')
    .toPromise()
    .then(res => res.data as AllergiesData)
    .then(data => data);
}

private getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
