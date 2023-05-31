import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SubmissionDto} from "../../features/problems/models/submission.dto";
import {ResponseDto} from "../models/response.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UjSubmissionsService {
  baseUrl: string = `${environment.API_URL}/uj-submissions/api/v1/submissions`;

  constructor(
    private http: HttpClient
  ) { }

  public createSubmission(submission: SubmissionDto): Observable<ResponseDto<number>> {
    return this.http.post<ResponseDto<number>>(`${this.baseUrl}`, submission);
  }
}
