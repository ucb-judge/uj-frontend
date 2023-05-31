import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemListComponent } from "./components/problem-list/problem-list.component";
import { AuthGuard } from "../../core/guards/auth.guard";

const routes: Routes = [
  { path: 'problems', component: ProblemListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsRoutingModule { }
