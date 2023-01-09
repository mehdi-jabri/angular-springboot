import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { ApplicationComponent } from './application/application.component';
import { ApplicationEditComponent } from './application/application-edit/application-edit.component';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { ApplicationAddComponent } from './application/application-add/application-add.component';

import {RoleComponent} from './role/role.component';
import {RoleListComponent} from './role/role-list/role-list.component';
import {RoleDetailsComponent} from './role/role-details/role-details.component';
import {RoleAddComponent} from './role/role-add/role-add.component';

import { AboutComponent } from './about/about.component';
import { BackgroundImgComponent } from './shared/components/background-img/background-img.component';


const routes: Routes = [
  {path: '', redirectTo: 'background', pathMatch: 'full'},
  {path: 'background', component: BackgroundImgComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},


  {
    path: 'app',
    component: ApplicationComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: ApplicationListComponent},
      {path: 'edit', component: ApplicationEditComponent},
      {path: 'add', component: ApplicationAddComponent}
    ]
  },
  {
    path: 'role',
    component: RoleComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: RoleListComponent},
      {path: 'details', component: RoleDetailsComponent},
      {path: 'add', component: RoleAddComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
