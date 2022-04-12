import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-signin-component',
  templateUrl: './signin-component.component.html',
  styleUrls: ['./signin-component.component.css'],
})
export class SigninComponentComponent implements OnInit {
  myform: FormGroup;
  password: FormControl;
  fieldTextType: boolean;
  email: FormControl;
  constructor() {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*'),
    ]);
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  createForm() {
    this.myform = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }
  onSubmit() {
    if (this.myform.valid) {
      console.log('Form Submitted!');
    }
  }
}
