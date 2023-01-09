import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NavbarComponent} from './navbar/navbar.component';
import { BackgroundImgComponent } from './background-img/background-img.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, BackgroundImgComponent],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
