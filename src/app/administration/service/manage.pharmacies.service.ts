import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PharmaciesData } from '../domain/pharmacies.data';

const apiBaseUrl = "http://localhost:4040/api/v1/";
@Injectable({
  providedIn: 'root'
})
export class ManagePharmaciesService {

  constructor(private http: HttpClient) { }
  createPhamacies(data): Observable<any>{
    console.log(data);
    return this.http.post<PharmaciesData>(apiBaseUrl+'postpharmacies',data);
  }

  getPharmacies():Observable<any>{
    return this.http.get<PharmaciesData>(apiBaseUrl+'listpharmacies');
  }
}
