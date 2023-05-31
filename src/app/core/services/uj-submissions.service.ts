import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SubmissionReqDto} from "../../features/problems/models/submission.req.dto";
import {ResponseDto} from "../models/response.dto";
import {Observable} from "rxjs";
import {SubmissionStatusDto} from "../../features/problems/models/submission.status.dto";
import {SubmissionDto} from "../../features/problems/models/submission.dto";

@Injectable({
  providedIn: 'root'
})
export class UjSubmissionsService {
  baseUrl: string = `${environment.API_URL}/uj-submissions/api/v1/submissions`;

  constructor(
    private http: HttpClient
  ) { }

  public createSubmission(submission: SubmissionReqDto): Observable<ResponseDto<number>> {
    return this.http.post<ResponseDto<number>>(`${this.baseUrl}`, submission);
  }

  public getSubmissionStatusById(id: number): Observable<ResponseDto<SubmissionStatusDto>> {
    return this.http.get<ResponseDto<SubmissionStatusDto>>(`${this.baseUrl}/${id}/status`);
  }

  public getSubmissionById(id: number): Observable<ResponseDto<SubmissionDto>> {
    return this.http.get<ResponseDto<SubmissionDto>>(`${this.baseUrl}/${id}`);
  }
}
