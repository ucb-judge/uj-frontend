import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UjContestsService} from "../../../../core/services/uj-contests.service";
import {ContestDto} from "../../models/contest.dto";
import {ProblemDto} from "../../../problems/models/problem.dto";

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  contestId: number = this.activatedRoute.snapshot.params.id;
  contest: ContestDto = {
    contestId: -1,
    name: '',
    description: "",
    startDate: new Date(),
    endDate: new Date(),
    professor: null,
    subject: null,
    isPublic: false
  }
  problems: ProblemDto[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ujContestsService: UjContestsService
  ) {
  }

  ngOnInit() {
    this.ujContestsService.getContestById(this.contestId).subscribe({
      next: (response) => {
        this.contest = response.data!;
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.ujContestsService.getContestProblemsById(this.contestId).subscribe({
      next: (response) => {
        console.log(response.data!)
        this.problems = response.data!;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  goToProblem(id: number) {
    this.router.navigate([`/contests/${this.contestId}/problems/${id}`]);
  }
}
