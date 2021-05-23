import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserApiService} from '../core/api/user-api.service';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msgs: Message[] = [];

  constructor(private readonly formBuilder: FormBuilder,
              private readonly userApiClient: UserApiService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.msgs = [{severity: 'error', detail: 'Login form invalid.'}];
    }

    this.userApiClient.login(this.loginForm.value)
      .subscribe(result => {
        this.msgs = [{severity: 'success', detail: 'Login Success.'}];
      }, ({error}) => {
        this.msgs = [{severity: 'error', detail: error.message}];
      });
  }
}
