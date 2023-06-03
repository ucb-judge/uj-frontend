import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CampusMajorDto} from "../../features/accounts/models/campus-major.dto";
import {ResponseDto} from "../models/response.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UjCampusMajorService {
  baseUrl: string = `${environment.API_URL}/uj-users/api/v1/campuses-majors`;

  constructor(private http: HttpClient) {}

  public getMajorsByCampusId(campusId: number) : Observable<ResponseDto<CampusMajorDto[]>> {
    return this.http.get<ResponseDto<CampusMajorDto[]>>( `${this.baseUrl}/campus/${campusId}`);
  }


  public getCampusMajorByUserId(userId: String) : Observable<ResponseDto<CampusMajorDto>> {
    return this.http.get<ResponseDto<CampusMajorDto>>(`${this.baseUrl}/student/${userId}`);
  }
}
