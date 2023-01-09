import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { RegisterService } from './register.service';

import { SuccessDialogComponent } from '../../shared/dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../../shared/dialogs/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  registerForm: FormGroup;
  errorMessage: string;
  private dialogConfig;

  constructor(private router: Router, private formBuilder: FormBuilder, private registerService: RegisterService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();
    this.dialogConfig = {
      height: '200px',
      width: '600px',
      disableClose: true,
      data: {}
    };
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null,  [Validators.required, Validators.email]],
      userName: [null, [Validators.required]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    });
  }

  registreUser() {
    console.log(this.registerForm.value);
    this.errorMessage = '';
    if (this.registerForm.valid) {
      this.registerService.registre(this.registerForm.value).subscribe(res => console.log('Res'));
      const dialogRefSuccess = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
      this.router.navigate(['/login']);
    } else {
      const dialogRefError = this.dialog.open(ErrorDialogComponent, this.dialogConfig);
    }
  }
}
