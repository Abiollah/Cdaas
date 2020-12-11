import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GenderData } from '../domain/gender.data';

const apiBaseUrl = "http://localhost:8080/api/v1/";
@Injectable({
  providedIn: 'root'
})

export class ManageGendersService {

  constructor(private http: HttpClient) { }

  createGender(data): Observable<any>{
    console.log(data);
    return this.http.post<GenderData>(apiBaseUrl+'postgenders',data);
  }

  getGenders():Observable<any>{
    return this.http.get<GenderData>(apiBaseUrl+'listgenders');
  }

  updateGender(data){
    return this.http.post<GenderData>(apiBaseUrl+'postgenders',data);
  }

  getGender() {
    return this.http.get<any>(apiBaseUrl+'listgenders')
    .toPromise()
    .then(res => res.data as GenderData)
    .then(data => data);
}
}
