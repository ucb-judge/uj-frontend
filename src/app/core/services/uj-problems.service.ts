import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ProblemTableDataDto} from "../../features/problems/models/problem.table.data.dto";
import {PageDto} from "../models/page.dto";
import {ResponseDto} from "../models/response.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UjProblemsService {
  baseUrl: string = `${environment.API_URL}/uj-problems/api/v1/problems`;

  constructor(private http: HttpClient) { }

  public getAllProblems(page: number = 0, size: number = 10): Observable<ResponseDto<PageDto<ProblemTableDataDto>>> {
    return this.http.get<ResponseDto<PageDto<ProblemTableDataDto>>>(`${this.baseUrl}?page=${page}&size=${size}`);
  }
}
