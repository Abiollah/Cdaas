import { Injectable,isDevMode} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { GenderData } from '../domain/gender.data';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ManageGendersService {
  
  constructor(private http: HttpClient) { }

  createGender(data): Observable<any>{
    console.log(data);
    return this.http.post<GenderData>(this.getBaseApiUrl()+'postgenders',data);
  }

  getGenders():Observable<any>{
    return this.http.get<GenderData>(this.getBaseApiUrl()+'listgenders');
  }

   

  protected getBaseApiUrl(): string {
    return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
    }
}
