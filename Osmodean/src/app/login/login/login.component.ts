import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user';
// import { AuthGuardService } from '../../guard/auth-guard.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private router: Router) { }
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
      minlength: 'Пароль повинен містити щонайменьше 8 знаків'
    }
  };
  // constructor(private fb: FormBuilder, private router: Router/*, private authService: AuthGuardService*/) { }

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
    // this.authService.login(this.loginForm.value.login, this.loginForm.value.password)
    // .subscribe(
    //   data => {
    //     this.router.navigate(['main']);
    //   }
    // );
    console.log(form.valid);
    console.log(form.value);
    console.log(form.pristine);
    this.router.navigate(['main']);
  }
}
