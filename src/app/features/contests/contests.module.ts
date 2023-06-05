import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestsRoutingModule } from './contests-routing.module';
import { AllContestsComponent } from './components/all-contests/all-contests.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import {SharedModule} from "../../shared/shared.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ProblemDetailsComponent } from './components/problem-details/problem-details.component';
import { ProblemSubmitComponent } from './components/problem-submit/problem-submit.component';
import {MatChipsModule} from "@angular/material/chips";
import {CodeEditorModule} from "@ngstack/code-editor";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import { RankingComponent } from './components/ranking/ranking.component';


@NgModule({
  declarations: [
    AllContestsComponent,
    SignupComponent,
    ProblemListComponent,
    ProblemDetailsComponent,
    ProblemSubmitComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatChipsModule,
    CodeEditorModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class ContestsModule { }
