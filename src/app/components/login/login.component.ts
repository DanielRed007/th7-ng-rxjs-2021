import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'rxjs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
    });
  }

  goToDashboard() {
    // Todo: Implements Modals using ngx bootstrap
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      this.router.navigate(['dashboard']);
      this.loginService.setUser(this.loginForm.value);
    } else {
      alert('Not logged in');
    }
  }
}
