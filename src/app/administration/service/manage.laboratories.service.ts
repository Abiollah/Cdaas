import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LaboratoriesData } from '../domain/laboratories.data';


const apiBaseUrl = "http://localhost:4040/api/v1/";
@Injectable({
  providedIn: 'root'
})
export class ManageLaboratoriesService {

  constructor(private http: HttpClient) { }
  createLaboratories(data): Observable<any>{
    console.log(data);
    return this.http.post<LaboratoriesData>(apiBaseUrl+'postlaboratories',data);
  }

  getLaboratories():Observable<any>{
    return this.http.get<LaboratoriesData>(apiBaseUrl+'listlaboratories');
  }
}
