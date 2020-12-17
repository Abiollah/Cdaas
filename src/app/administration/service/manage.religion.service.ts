import { Injectable,isDevMode} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ReligionData } from '../domain/religion.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageReligionService {

  constructor(private http: HttpClient) { }

  createUpdateReligion(data): Observable<any>{
    console.log(data);
    return this.http.post<ReligionData>(this.getBaseApiUrl()+'postrelationship',data);


}

getReligion():Observable<any>{
  return this.http.get<ReligionData>(this.getBaseApiUrl()+'listreligions');
}

  private getBaseApiUrl(): string {
    return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
    }
    updateReligion(data){
      return this.http.post<ReligionData>(this.getBaseApiUrl()+'postrelationship',data);
    }
    getReligions() {
      return this.http.get<any>(this.getBaseApiUrl()+'listreligions')
      .toPromise()
      .then(res => res.data as ReligionData)
      .then(data => data);
  }
}





