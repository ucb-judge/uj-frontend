import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ResponseDto} from "../models/response.dto";
import {CampusDto} from "../../features/accounts/models/campus.dto";
import {UserDto} from "../../features/accounts/models/user.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UjUsersService {
  baseUrl: string = `${environment.API_URL}/uj-users/api/v1/users`;
  constructor(private http: HttpClient) {}

  public createStudent(student: UserDto): Observable<ResponseDto<String>> {
    return this.http.post<ResponseDto<String>>(`${this.baseUrl}/student`, student);
  }
}

