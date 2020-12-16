import { Injectable,isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetadataConfigService {

  constructor(private http: HttpClient) { }

  getGenderMap(data): Observable<any>{
     return this.http.get<any>(this.getBaseApiUrl()+'listgenders')
  }

  protected getBaseApiUrl(): string {
    return isDevMode ? environment.apiBaseUrl : environment.apiBaseUrl;
    }

}
