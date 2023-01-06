import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex=/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
      const isValidPassword = regex.test(control.value);
      return !isValidPassword ? {invalidEmail: true} : null;
    };
  }

  static passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex=/^(?=.[!@#$&])(?=.[0-9])(?=.[a-z]).+$/;
      const isValidPassword = regex.test(control.value);
      return !isValidPassword ? {invalid: true} : null;
    };
  }
}
