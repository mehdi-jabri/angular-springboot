import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, Form} from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from '../application.model';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-application-add',
  templateUrl: './application-add.component.html',
  styleUrls: ['./application-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ApplicationAddComponent implements OnInit {
  addForm: FormGroup;
  roleForm: FormGroup;
  app: Application;
  title = 'Create Application';
  @Input() PermissionForm: Form;

  constructor(private router: Router, private formBuilder: FormBuilder, private applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.initForm();
    this.initFormRole();
  }

  private initForm() {
    this.addForm  =  this.formBuilder.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      id_client: ['', Validators.required]
    });
  }

  private initFormRole() {
    this.roleForm  =  this.formBuilder.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      data_scope_id: ['', Validators.required],
      parent_id: ['', Validators.required]
    });

  }

  createApplication() {
    console.log(this.addForm.value);
    if (this.addForm.valid) {
      this.applicationService.addApplication(this.addForm.value).subscribe(res => console.log('Res'));
    }
  }


  save() {

    this.applicationService.addApplication(this.addForm.value).subscribe(result => {
      if (result) {
        this.router.navigate(['/home']);
      }
    });
  }

}
