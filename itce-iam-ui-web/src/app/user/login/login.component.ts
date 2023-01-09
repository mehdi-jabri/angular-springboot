import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SuccessDialogComponent } from '../../shared/dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../../shared/dialogs/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material';

import {Router} from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginForm: FormGroup;
  emailRegx = '';
  private dialogConfig;
  errorMessage: string;

  constructor(private router: Router, private formBuilder: FormBuilder, private dialog: MatDialog, private loginService: LoginService) {}

  ngOnInit() {
    this.createForm();
    this.dialogConfig = {
      height: '200px',
      width: '600px',
      disableClose: true,
      data: {}
    };
  }

  login() {

    console.log('Login');
    this.errorMessage = '';
    this.email = this.loginForm.value;
    this.password = this.loginForm.value;

    if (this.loginForm.valid) {
      this.loginService.login(this.email, this.password);
        // let dialogRefSuccess = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        // this.router.navigate(['/home']);
      this.errorMessage = 'Invalid email or password.';
    } else {
      // let dialogRefError = this.dialog.open(ErrorDialogComponent, this.dialogConfig);
      this.errorMessage = 'Invalid email or password.';
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }
}
