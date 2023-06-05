import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ContestDto} from "../../features/contests/models/contest.dto";
import {ResponseDto} from "../models/response.dto";
import {Observable} from "rxjs";
import {ProblemDto} from "../../features/problems/models/problem.dto";
import {ContestScoreboardDto} from "../../features/contests/models/contest.scoreboard.dto";

@Injectable({
  providedIn: 'root'
})
export class UjContestsService {
  baseUrl: string = `${environment.API_URL}/uj-contests/api/v1/contests`;

  constructor(
    private http: HttpClient
  ) { }

  public getAllContests(): Observable<ResponseDto<ContestDto[]>> {
    return this.http.get<ResponseDto<ContestDto[]>>(`${this.baseUrl}`);
  }

  public signUp(id: number): Observable<ResponseDto<any>> {
    return this.http.post<ResponseDto<any>>(`${this.baseUrl}/${id}/signup`, {});
  }

  public getContestById(id: number): Observable<ResponseDto<ContestDto>> {
    return this.http.get<ResponseDto<ContestDto>>(`${this.baseUrl}/${id}`);
  }

  public getContestProblemsById(id: number): Observable<ResponseDto<ProblemDto[]>> {
    return this.http.get<ResponseDto<ProblemDto[]>>(`${this.baseUrl}/${id}/problems`);
  }

  public getScoreboardByContestId(id: number): Observable<ResponseDto<ContestScoreboardDto[]>> {
    return this.http.get<ResponseDto<ContestScoreboardDto[]>>(`${this.baseUrl}/${id}/scoreboard`);
  }
}
