import {Component, OnDestroy, OnInit} from '@angular/core';
import {UjContestsService} from "../../../../core/services/uj-contests.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit, OnDestroy {

  contestId: number = -1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ujContestsService: UjContestsService
  ) {
    this.contestId = this.activatedRoute.snapshot.params['contestId'];
  }

  ngOnInit() {
    this.ujContestsService.getContestById(this.contestId).subscribe({
      next: (response) => {

      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy() {

  }
}
