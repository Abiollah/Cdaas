import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AllergiesData } from '../domain/allergies.data';

const apiBaseUrl = "http://192.168.1.149:8080/api/v1/";
@Injectable({
  providedIn: 'root'
})
export class ManageAllergiesService {

  constructor(private http: HttpClient) { }

  createUpdateAllergies(data): Observable<any>{
    console.log(data);
    return this.http.post<AllergiesData>(apiBaseUrl+'postallergies',data);
  }

  getAllergiess():Observable<any>{
    return this.http.get<AllergiesData>(apiBaseUrl+'listallergies');
  }

  updateAllergies(data){
    return this.http.post<AllergiesData>(apiBaseUrl+'postallergies',data);
  }

  getAllergies() {
    return this.http.get<any>(apiBaseUrl+'listallergies')
    .toPromise()
    .then(res => res.data as AllergiesData)
    .then(data => data);
}
}

