import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', Validators.compose([Validators.required, Validators.email])],
      contactFormMessage: ['', Validators.required],
      contactFormCopy: [''],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
      console.log('msg');
  }
}
