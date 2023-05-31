import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemListComponent } from "./components/problem-list/problem-list.component";
import { AuthGuard } from "../../core/guards/auth.guard";
import {ProblemDetailsComponent} from "./components/problem-details/problem-details.component";

const routes: Routes = [
  { path: 'problems', component: ProblemListComponent, canActivate: [AuthGuard] },
  { path: 'problems/:id', component: ProblemDetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsRoutingModule { }
