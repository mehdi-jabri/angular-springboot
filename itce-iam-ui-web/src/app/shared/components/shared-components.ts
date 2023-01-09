import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileInputComponent} from './file-input/file-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [FileInputComponent],
  exports: [FileInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MDBBootstrapModule
  ]
})
export class SharedComponentsModule {
}
