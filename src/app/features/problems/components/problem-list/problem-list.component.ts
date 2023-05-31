import { Component, OnInit } from '@angular/core';
import { UjProblemsService } from "../../../../core/services/uj-problems.service";
import {ProblemTableDataDto} from "../../models/problem.table.data.dto";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: ProblemTableDataDto[] = [];
  page: number = 0;
  size: number = 10;
  total: number = 0;

  constructor(private ujProblemsService: UjProblemsService) { }

  ngOnInit(): void {
    this.loadProblems();
  }

  loadProblems() {
    this.ujProblemsService.getAllProblems(this.page, this.size).subscribe({
      next: (response) => {
        console.log(response);
        this.problems = response.data!.content;
        this.total = response.data!.totalElements;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onPageChange(pageEvent: PageEvent) {
    this.page = pageEvent.pageIndex;
    this.size = pageEvent.pageSize
    this.loadProblems();
  }

  goToProblem(id: number) {
    console.log("Go to problem with id: " + id);
  }
}
