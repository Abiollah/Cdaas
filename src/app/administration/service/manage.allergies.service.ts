import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AllergiesData } from '../domain/allergies.data';

const apiBaseUrl = "http://localhost:4040/api/v1/";
@Injectable({
  providedIn: 'root'
})
export class ManageAllergiesService {

  constructor(private http: HttpClient) { }
  createAllergies(data): Observable<any>{
    console.log(data);
    return this.http.post<AllergiesData>(apiBaseUrl+'postallergies',data);
  }

  getAllergies():Observable<any>{
    return this.http.get<AllergiesData>(apiBaseUrl+'listallergies');
  }
}
