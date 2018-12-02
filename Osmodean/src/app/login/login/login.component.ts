import { Component, OnInit } from '@angular/core';
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

  user: User;
  loginForm: FormGroup;
  state = 'small';

  formErrors = {
    login: '',
    password: ''
  };

  validationMessages = {
    login: {
      required: 'Login is required',
      email: 'Enter valid email',

    },
    password: {
      required: 'Password is reqired',
      minlength: 'Password must be at least 8 characters long'
    }
  };
  constructor(private fb: FormBuilder, private router: Router/*, private authService: AuthGuardService*/) { }

  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   login: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(8)]]
    // });

    // this.loginForm.valueChanges.subscribe(data => this.valueChanged(data));
  }

  // valueChanged(data) {
  //   for (const field in this.formErrors) {
  //     this.formErrors[field] = '';
  //     const control = this.loginForm.get(field);
  //     if (control.dirty) {
  //       for (const key in control.errors) {
  //         this.formErrors[field] = this.validationMessages[field][key];
  //       }
  //     }
  //   }
  // }

  // onSubmit(form: FormGroup) {
  //   this.authService.login(this.loginForm.value.login, this.loginForm.value.password)
  //   .subscribe(
  //     data => {
  //       this.router.navigate(['main']);
  //     }
  //   );
  //   // console.log(form.valid);
  //   // console.log(form.value);
  //   // console.log(form.pristine);
  //   // this.router.navigate(['main']);
  // }
}
