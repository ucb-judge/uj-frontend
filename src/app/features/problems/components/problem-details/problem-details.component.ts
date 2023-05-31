import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UjProblemsService} from "../../../../core/services/uj-problems.service";

@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.css']
})
export class ProblemDetailsComponent implements OnInit {

  problemId: number = -1;
  contestId: number | null = -1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ujProblemsService: UjProblemsService
  ) {
    this.problemId = this.activatedRoute.snapshot.params['id'];
    this.contestId = this.router.getCurrentNavigation()?.extras.state?.['contestId'];
  }

  ngOnInit(): void {
    this.ujProblemsService.getProblemById(this.problemId).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
