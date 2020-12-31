import { Injectable,isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PharmaciesData } from '../domain/pharmacies.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManagePharmaciesService {

  constructor(private http: HttpClient) { }
  createUpdatePhamarcies(data): Observable<any>{
    console.log(data);
    return this.http.post<PharmaciesData>(this.getBaseApiUrl()+'postpharmacies',data);
  }

  getPharmacciess():Observable<any>{
    return this.http.get<PharmaciesData>(this.getBaseApiUrl()+'listpharmacies');
  }

  updatePharmacies(data){
    return this.http.post<PharmaciesData>(this.getBaseApiUrl()+'postpharmacies',data);
  }

  getPharmacies() {
    return this.http.get<any>(this.getBaseApiUrl()+'listpharmacies')
    .toPromise()
    .then(res => res.data as PharmaciesData)
    .then(data => data);
}
private getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}