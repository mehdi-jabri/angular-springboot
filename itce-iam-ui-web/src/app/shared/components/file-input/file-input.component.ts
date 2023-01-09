import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {

  uploadFileForm: FormGroup;
  selectedFile: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  get formControl() {
    return this.uploadFileForm.controls;
  }

  private initForm() {
    this.uploadFileForm = this.formBuilder.group({
      filePath: ['', Validators.required]
    });
  }

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.file[0].name;
    }
  }

}
