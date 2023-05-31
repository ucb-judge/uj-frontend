import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemsRoutingModule } from './problems-routing.module';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailsComponent } from './components/problem-details/problem-details.component';
import { ProblemSubmitComponent } from './components/problem-submit/problem-submit.component';
import { ProblemResultsComponent } from './components/problem-results/problem-results.component';
import { ProblemSubmittedListComponent } from './components/problem-submitted-list/problem-submitted-list.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    ProblemListComponent,
    ProblemDetailsComponent,
    ProblemSubmitComponent,
    ProblemResultsComponent,
    ProblemSubmittedListComponent
  ],
  imports: [
    CommonModule,
    ProblemsRoutingModule,
    SharedModule
  ]
})
export class ProblemsModule { }
