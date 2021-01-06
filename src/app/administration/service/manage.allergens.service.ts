import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AllergensData } from '../domain/allergens.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageAllergensService {

  constructor(private http: HttpClient) { }

  createAllergens(data): Observable<any>{
    console.log(data);
    return this.http.post<AllergensData>(this.getBaseApiUrl()+'postallergens',data);
  }

  getAllergenss():Observable<any>{
    return this.http.get<AllergensData>(this.getBaseApiUrl()+'listallergens');
  }

protected getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
