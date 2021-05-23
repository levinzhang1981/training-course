import {Component, OnInit} from '@angular/core';
import {AbstractControlOptions, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../../shared/validator/must-match.validator';
import {UserApiService} from '../../core/api/user-api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(private readonly formBuilder: FormBuilder,
              private readonly userApiClient: UserApiService) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  registerForm: FormGroup;
  submitted = false;

  genderOpts = [{label: 'Male', value: 1}, {label: 'Female', value: 2}, {label: 'Other', value: 3}];

  ngOnInit() {
    const formOptions: AbstractControlOptions = {
      validators: MustMatch('password', 'confirmPassword')
    };

    this.registerForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        name: ['', Validators.required],
        gender: [1, Validators.required],
        birthday: ['', Validators.required],
        phoneNum: ['', Validators.required],
        homeAddress: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        isAdmin: [false, Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      formOptions
    );
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.controls[key].markAsDirty();
      });
      this.registerForm.updateValueAndValidity();
      return;
    }

    this.userApiClient.create(this.registerForm.value).subscribe(() => {
      alert('User created success');
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
