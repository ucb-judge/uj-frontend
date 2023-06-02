import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';
import { AccountProfileUpdateComponent } from './components/account-profile-update/account-profile-update.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ProblemsModule} from "../problems/problems.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    HomePageComponent,
    AccountRegisterComponent,
    AccountProfileUpdateComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    ProblemsModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AccountsModule { }
