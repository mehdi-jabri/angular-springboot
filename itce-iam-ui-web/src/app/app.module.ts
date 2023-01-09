import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {ApplicationModule} from './application/application.module';
import {RoleModule} from './role/role.module';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { SharedComponentsModule } from './shared/components/shared-components';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DialogsModule} from './shared/dialogs/dialogs.module';
import { UserModule } from './user/user.module';
import { AboutComponent } from './about/about.component';
import {ComponentsModule} from './shared/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    ApplicationModule,
    ComponentsModule,
    RoleModule,
    DialogsModule,
    UserModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
