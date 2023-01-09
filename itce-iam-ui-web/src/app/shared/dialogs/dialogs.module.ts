import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmedDialogComponent} from './confirmed-dialog/confirmed-dialog.component';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import {SuccessDialogComponent} from './success-dialog/success-dialog.component';

import {
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/typings/dialog';
import {MatCardModule} from '@angular/material/typings/card';
import {MatPaginatorModule} from '@angular/material/typings/paginator';
import {MatSortModule} from '@angular/material/typings/sort';
import {MatTableModule} from '@angular/material/typings/table';
import {MatButtonModule} from '@angular/material/typings/button';

@NgModule({
  declarations: [
    ConfirmedDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule
  ],
  exports: [
    ConfirmedDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    FlexLayoutModule,

    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule

  ],
  entryComponents: [
    ConfirmedDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent
  ]
})
export class DialogsModule {
}
