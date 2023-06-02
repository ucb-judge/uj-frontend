import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';
import { AccountProfileUpdateComponent } from './components/account-profile-update/account-profile-update.component';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'signup', component: AccountRegisterComponent },
  { path: 'profile', component: AccountProfileComponent },
  { path: 'profile/update', component: AccountProfileUpdateComponent },
  { path: 'profile/change-password', component: AccountRegisterComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
