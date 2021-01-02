import { Injectable, isDevMode} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LanguageData } from '../domain/language.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageLanguageService {

  constructor(private http: HttpClient) { }

  createUpdateLanguage(data): Observable<any>{
    console.log(data);
    return this.http.post<LanguageData>(this.getBaseApiUrl()+'postlanguages',data);
  }

  getLanguages():Observable<any>{
    return this.http.get<LanguageData>(this.getBaseApiUrl()+'listlanguages');
  }

  updateLanguage(data){
    return this.http.post<LanguageData>(this.getBaseApiUrl()+'postlanguages',data);
  }

  getLanguage() {
    return this.http.get<any>(this.getBaseApiUrl()+'listlanguages')
    .toPromise()
    .then(res => res.data as LanguageData)
    .then(data => data);
}

private getBaseApiUrl(): string {
  return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
  }
}
