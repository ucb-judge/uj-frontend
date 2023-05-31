import { Component, OnInit } from '@angular/core';
import {UjSubmissionsService} from "../../../../core/services/uj-submissions.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LanguageDto} from "../../../../core/models/language.dto";
import {CodeModel} from "@ngstack/code-editor";
import {UjProblemsService} from "../../../../core/services/uj-problems.service";
import {ProblemDto} from "../../models/problem.dto";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SubmissionDto} from "../../models/submission.dto";

@Component({
  selector: 'app-problem-submit',
  templateUrl: './problem-submit.component.html',
  styleUrls: ['./problem-submit.component.css']
})
export class ProblemSubmitComponent implements OnInit {
  problemId: number = -1;
  contestId: number | null = -1;
  admittedLanguages: LanguageDto[] | null = [];
  submissionForm: FormGroup;

  problem: ProblemDto = {
    problemId: -1,
    title: "",
    description: "",
    sampleInputs: [],
    sampleOutputs: [],
    timeLimit: 0,
    memoryLimit: 0,
    tags: [],
    admittedLanguages: []
  };

  // code editor
  codeEditorTheme: string = "vs-dark";

  codeModel: CodeModel = {
    language: "java",
    uri: "main.java",
    value: ""
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private ujSubmissionsService: UjSubmissionsService,
    private ujProblemsService: UjProblemsService
  ) {
    this.problemId = this.activatedRoute.snapshot.params['id'];
    this.contestId = this.router.getCurrentNavigation()?.extras.state?.['contestId'];
    this.submissionForm = this.formBuilder.group<SubmissionDto>({
      problemId: Number(this.problemId),
      contestId: Number(this.contestId) || null,
      sourceCode: this.codeModel.value,
      languageId: -1
    });
    this.admittedLanguages = this.router.getCurrentNavigation()?.extras.state?.['admittedLanguages'];
  }

  ngOnInit(): void {
    if(this.admittedLanguages == null) {
      this.ujProblemsService.getProblemById(this.problemId).subscribe({
        next: (response) => {
          this.problem = response.data!!;
          this.admittedLanguages = this.problem.admittedLanguages;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }

  onCodeChanged(event: any) {
    this.submissionForm.controls['sourceCode'].setValue(event);
  }

  setLanguage(event: any) {
    this.codeModel = {
      ...this.codeModel,
      language: event.value.extension,
      uri: `main.${event.value.extension}`
    }
    this.submissionForm.controls['languageId'].setValue(event.value.languageId);
  }

  submitForm() {
    this.ujSubmissionsService.createSubmission(this.submissionForm.value).subscribe({
      next: (response) => {

      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
