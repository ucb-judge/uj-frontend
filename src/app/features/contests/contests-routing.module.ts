import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllContestsComponent} from "./components/all-contests/all-contests.component";
import {AuthGuard} from "../../core/guards/auth.guard";
import {ProblemListComponent} from "./components/problem-list/problem-list.component";
import {ProblemDetailsComponent} from "./components/problem-details/problem-details.component";
import {ProblemSubmitComponent} from "./components/problem-submit/problem-submit.component";

const routes: Routes = [
  { path: 'contests', component: AllContestsComponent, canActivate: [AuthGuard]},
  { path: 'contests/:id', component: ProblemListComponent, canActivate: [AuthGuard]},
  { path: 'contests/:contestId/problems/:problemId', component: ProblemDetailsComponent, canActivate: [AuthGuard]},
  { path: 'contests/:contestId/problems/:problemId/submit', component: ProblemSubmitComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestsRoutingModule { }
