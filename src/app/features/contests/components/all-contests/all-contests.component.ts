import {Component, OnInit} from '@angular/core';
import {UjContestsService} from "../../../../core/services/uj-contests.service";
import {Router} from "@angular/router";
import {ContestDto} from "../../models/contest.dto";
import {MatDialog} from "@angular/material/dialog";
import {SignupComponent} from "../signup/signup.component";

@Component({
  selector: 'app-all-contests',
  templateUrl: './all-contests.component.html',
  styleUrls: ['./all-contests.component.css']
})
export class AllContestsComponent implements OnInit {
  contests: ContestDto[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private ujContestsService: UjContestsService
  ) {
  }

  ngOnInit(): void {
    this.ujContestsService.getAllContests().subscribe({
      next: (response) => {
        this.contests = response.data!;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  openDialog(contestId: number): void {
    this.dialog.open(SignupComponent, {
      data: {contestId},
      width: '250px',
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms',
    });
  }
}
