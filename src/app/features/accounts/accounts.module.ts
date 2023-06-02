import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';
import { AccountProfileUpdateComponent } from './components/account-profile-update/account-profile-update.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


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
    MatButtonModule
  ]
})
export class AccountsModule { }
