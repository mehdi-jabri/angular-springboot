import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../role.model';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit {
  loading = false;
  addForm: FormGroup;
  title = 'Create Role';
  constructor(private router: Router, private formBuilder: FormBuilder, private roleService: RoleService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.addForm  =  this.formBuilder.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      data_scope_id: ['', Validators.required],
      parent_id: ['', Validators.required]
    });
  }

  createRole() {
    console.log(this.addForm.value);
    this.loading = true;
    if (this.addForm.valid) {
      this.roleService.addRole(this.addForm.value).subscribe(res => console.log('Res'));
    }
  }
}
