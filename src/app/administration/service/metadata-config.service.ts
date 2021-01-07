import { Injectable,isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GenderData } from '../../administration/domain/gender.data';
import { MaritalStatusData } from '../domain/maritalstatus.data';
import { OccupationData } from '../domain/occupation.data';
import { QualificationData } from '../domain/qualification.data';
import { HeirarchyUnitsData } from '../domain/heirarchyunits.data';
import { AssessmentQuestions, AssessmentType } from '../domain/assessments.data';
import { StatusTypeData } from 'src/app/administration/domain/statustype.data';


@Injectable({
  providedIn: 'root'
})
export class MetadataConfigService {
 
  constructor(private http: HttpClient) { }

  getGenderList(): Observable<any>{
     return this.http.get<GenderData[]>(`${environment.apiBaseUrl}`+'listgenders');  
     
  }

  getStatusTypeList(): Observable<any>{
    return this.http.get<StatusTypeData[]>(`${environment.apiBaseUrl}`+'liststatustype');  
    
 }

  getMaritalStatusList(): Observable<any>{
    return this.http.get<MaritalStatusData[]>(`${environment.apiBaseUrl}`+'listmaritalstatus');  
    
 }

 getOccupationList(): Observable<any>{
  return this.http.get<OccupationData[]>(`${environment.apiBaseUrl}`+'listoccupations');  
  
}
getQualificationList(): Observable<any>{
  return this.http.get<QualificationData[]>(`${environment.apiBaseUrl}`+'listqualifications');  
  
}

getHeirarchyUnitsList(): Observable<any>{
  return this.http.get<HeirarchyUnitsData[]>(`${environment.apiBaseUrl}`+'listheirarchyunitsbyparentid?parentid=1');  
  
}
getHeirarchyUnitsListById(id: number): Observable<any>{
  return this.http.get<HeirarchyUnitsData[]>(`${environment.apiBaseUrl}`+'listheirarchyunitsbyparentid?parentid='+id);  
  
}
getAssessmentTypeList(): Observable<any>{
  return this.http.get<AssessmentType[]>(`${environment.apiBaseUrl}`+'listassessmenttype');  
  
}

getAssessmentQuestionList(): Observable<any>{
  return this.http.get<AssessmentQuestions[]>(`${environment.apiBaseUrl}`+'listassessmentquestions');  
  
}

  }
