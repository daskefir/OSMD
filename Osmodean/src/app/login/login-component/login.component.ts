import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login-service/login.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

  user: User;
  loginForm: FormGroup;
  state = 'small';

  formErrors = {
    login: '',
    password: ''
  };

  validationMessages = {
    login: {
      required: 'Обов\'язкове поле',
      email: 'Невірно заповнене',

    },
    password: {
      required: 'Обов\'язкове поле',
      minlength: 'Пароль повинен містити щонайменше 8 символів'
    }
  };

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.loginForm.valueChanges.subscribe(data => this.valueChanged(data));
  }

  valueChanged(data) {
    for (const field of Object.keys(this.formErrors)) {
      this.formErrors[field] = '';
      const control = this.loginForm.get(field);
      if (control.dirty) {
        for (const key in control.errors) {
          if (this.formErrors.hasOwnProperty(field)) {
            this.formErrors[field] = this.validationMessages[field][key];
          }
        }
      }
    }
  }

  onSubmit(form: FormGroup) {
    this.loginService.login(form.value.login, form.value.password);
  }
}
