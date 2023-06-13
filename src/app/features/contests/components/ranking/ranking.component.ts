import {Component, OnDestroy, OnInit} from '@angular/core';
import {UjContestsService} from "../../../../core/services/uj-contests.service";
import {ActivatedRoute} from "@angular/router";
import {ContestDto} from "../../models/contest.dto";
import {ContestScoreboardDto} from "../../models/contest.scoreboard.dto";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit, OnDestroy {

  contestId: number = -1;
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
  ranking: ContestScoreboardDto[] = [];
  rankingInterval: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ujContestsService: UjContestsService
  ) {
    this.contestId = this.activatedRoute.snapshot.params['contestId'];
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
    this.updateRanking();
    this.rankingInterval = setInterval(() => {
      this.updateRanking();
    }, 10000)
  }

  updateRanking() {
    this.ujContestsService.getScoreboardByContestId(this.contestId).subscribe({
      next: (response) => {
        this.ranking = response.data!;
        this.ranking.sort((a, b) => {
          return b.problemsSolved - a.problemsSolved;
        });
        let rank = 1;
        for (let i = 0; i < this.ranking.length; i++) {
          this.ranking[i].rank = rank;
          rank++;
        }
      },
      error: (error) => {
        this.rankingInterval.clearInterval(
          this.rankingInterval
        );
        console.log(error);
      }
    });
  }

  ngOnDestroy() {
    this.rankingInterval.clearInterval(
      this.rankingInterval
    );
  }
}
