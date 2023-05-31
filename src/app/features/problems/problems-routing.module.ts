import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProblemListComponent} from "./components/problem-list/problem-list.component";

const routes: Routes = [
  { path: 'problems', component: ProblemListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsRoutingModule { }
