import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ResponseDto} from "../models/response.dto";
import {CampusDto} from "../../features/accounts/models/campus.dto";

@Injectable({
  providedIn: 'root'
})
export class UjCampusService {
  baseUrl: string = `${environment.API_URL}/uj-users/api/v1/campuses`;
  constructor(private http: HttpClient) {}

  public getCampuses() {
    return this.http.get<ResponseDto<CampusDto[]>>(
      `${this.baseUrl}`
    );
  }
}

