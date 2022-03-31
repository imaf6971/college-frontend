import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      email: this.emailControl,
      password: this.passwordControl
    })
  }

  getEmailErrorMessage() {
    if (this.emailControl.hasError('required')) {
      return 'Введите значение';
    }
    return this.emailControl.hasError('email') ? 'Введите валидный адрес': '';
  }

  getPasswordErrorMessage() {
    return this.passwordControl.hasError('required') ? 'Введите значение' : '';
  }

  login() {
    this.auth.login({ login: '', password: '' });
    this.router.navigate(['/courses']);
  }
}
