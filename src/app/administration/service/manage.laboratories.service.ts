import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LaboratoriesData } from '../domain/laboratories.data';


const apiBaseUrl = "http://192.168.1.149:8080/api/v1/";
@Injectable({
  providedIn: 'root'
})
export class ManageLaboratoriesService {

  constructor(private http: HttpClient) { }

  createUpdateLaboratories(data): Observable<any>{
    console.log(data);
    return this.http.post<LaboratoriesData>(apiBaseUrl+'postlaboratories',data);
  }

  getLaboratoriess():Observable<any>{
    return this.http.get<LaboratoriesData>(apiBaseUrl+'listlaboratories');
  }

  updateLaboratories(data){
    return this.http.post<LaboratoriesData>(apiBaseUrl+'postlaboratories',data);
  }

  getLaboratories() {
    return this.http.get<any>(apiBaseUrl+'listlaboratories')
    .toPromise()
    .then(res => res.data as LaboratoriesData)
    .then(data => data);
}
}

