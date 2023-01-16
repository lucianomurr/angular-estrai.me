import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

interface RegisterForm {
  email: string;
  confirmEmail: string;
  password: string;
  acceptTerms: boolean;
}

interface RegisterFormGroup extends FormGroup {
  value: RegisterForm;
  controls: {
    email: AbstractControl<string>;
    confirmEmail: AbstractControl<string>;
    password: AbstractControl<string>;
    acceptTerms: AbstractControl<boolean>;
  };
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
      <p class="text-center text-sm text-gray-500 font-light">Or sign up with credentials</p>
      <form class="mt-6" (ngSubmit)="onSubmit()" [formGroup]="signUpForm">
        <div class="relative">
          <input
            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
            id="inputEmail"
            required
            type="email"
            formControlName="email"
            [ngClass]="{ 'text-red-700 border border-red-600 placeholder-red-700': submitted && form.email.errors }"
            placeholder="Email: your_email@domain.com" />
          <div class="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 ml-3 text-gray-400 p-1"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>
        <span *ngIf="submitted && form.email.errors" class="inline-flex text-sm text-red-600"
          >Insert a valid email!</span
        >
        <div class="relative mt-3">
          <input
            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
            id="inputConfirmEmail"
            formControlName="confirmEmail"
            type="email"
            required
            placeholder="Confirm email" />
          <div class="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 ml-3 text-gray-400 p-1"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>
        <span *ngIf="submitted && form.confirmEmail.errors" class="inline-flex text-sm text-red-600"
          >Email and Confirm email should be equal!</span
        >
        <div class="relative mt-3">
          <input
            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
            id="inputPassword"
            formControlName="password"
            type="password"
            placeholder="Password" />
          <div class="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 ml-3 text-gray-400 p-1"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
          </div>
        </div>
        <span *ngIf="submitted && form.password.errors" class="inline-flex text-sm text-red-600"
          >Password length should be at least 6 characters!</span
        >
        <p class="mt-4 italic text-gray-500 font-light text-xs">
          Password strength: <span class="font-bold text-yellow-500">weak</span>
        </p>
        <div class="mt-4 flex items-center text-gray-500">
          <input type="checkbox" id="acceptTerms" name="terms" class="mr-2" formControlName="acceptTerms" />
          <label class="text-sm" for="acceptTerms"
            >I agree with the
            <a class="text-red-400 hover:text-red-500" [routerLink]="['/privacy']" routerLinkActive="router-link-active"
              >Privacy Policy</a
            ></label
          >
        </div>
        <div class="flex items-center justify-center mt-8">
          <button
            class="text-white py-2 px-4 uppercase rounded bg-green-500 hover:bg-green-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            Create Account
          </button>
        </div>
        <div class="flex items-center justify-center mt-8">
          <a
            class="text-gray-400 hover:text-gray-500"
            [routerLink]="['/auth/log-in']"
            routerLinkActive="router-link-active"
            >Already have an account?</a
          >
        </div>
      </form>
    </div>
  `,
  styles: [],
})
export class SignUpComponent {
  signUpForm: RegisterFormGroup;
  submitted = false;

  constructor(private authService: AuthService) {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      confirmEmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      acceptTerms: new FormControl(false, Validators.requiredTrue),
    }) as RegisterFormGroup;
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signUpForm.status === 'INVALID') {
      return;
    } else {
      this.authService.SignUp(this.signUpForm.value.email, this.signUpForm.value.password);
    }
  }
}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
