import { Injectable,isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AllergiesData, AllergensData, SeverityData } from '../domain/allergies.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageAllergiesService {


  constructor(private http: HttpClient) { }

  createAllergies(data): Observable<any>{
    console.log(data);
    return this.http.post<AllergiesData>(this.getBaseApiUrl()+'postallergies',data);
  }

  getAllergiess():Observable<any>{
    return this.http.get<AllergiesData>(this.getBaseApiUrl()+'listallergies');
  }


  // Allergens Methods
  
  createAllergens(data): Observable<any>{
    console.log(data);
    return this.http.post<AllergensData>(this.getBaseApiUrl()+'postallergens',data);
  }

  getAllergenss():Observable<any>{
    return this.http.get<AllergensData>(this.getBaseApiUrl()+'listallergens');
  }
  
  //Severity Methods

  createSeverity(data): Observable<any>{
    console.log(data);
    return this.http.post<SeverityData>(this.getBaseApiUrl()+'postseverity',data);
  }

  getSeveritys():Observable<any>{
    return this.http.get<SeverityData>(this.getBaseApiUrl()+'listseverity');
  }

protected getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
