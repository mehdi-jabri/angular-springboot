import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ConfirmedDialogComponent } from '../../shared/dialogs/confirmed-dialog/confirmed-dialog.component';

@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html',
  styleUrls: ['./application-edit.component.scss']
})
export class ApplicationEditComponent implements OnInit {
  editField: string;
  applicationList: Array<any> = [
    { id: 1, name: 'application 1',  description: 'Application test 1' },
    { id: 2, name: 'application 2',  description: 'Application test 2' },
    { id: 3, name: 'application 3',  description: 'Application test 3' },
    { id: 4, name: 'application 4',  description: 'Application test 4' },
    { id: 5, name: 'application 5',  description: 'Application test 5' },
    { id: 6, name: 'application 6',  description: 'Application test 6' },
  ];
  App: Array<any> = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.applicationList[id][property] = editField;
  }

  remove(id: any) {
    const  dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '200px';
    dialogConfig.width = '400px';
    dialogConfig.data = {
      title: `Delete application`,
      message: 'Are you sure?'
    };

    const dialogRef = this.dialog.open(ConfirmedDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.App.push(this.applicationList[id]);
      this.applicationList.splice(id, 1);
    }
    });
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
