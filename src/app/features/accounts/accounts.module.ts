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
    MatTableModule
  ]
})
export class AccountsModule { }
