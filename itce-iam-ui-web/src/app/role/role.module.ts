import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import {RoleService} from './role.service';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleAddComponent } from './role-add/role-add.component';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ComponentsModule} from '../shared/components/components.module';

@NgModule({
  declarations: [RoleComponent, RoleDetailsComponent, RoleListComponent, RoleAddComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    RoleAddComponent
  ],
  providers: [RoleService]
})
export class RoleModule { }
