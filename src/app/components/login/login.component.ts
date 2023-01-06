import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { ValidationService } from './../../services/validation/validation.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form=this.fb.group(
    {
      email:new FormControl<string>(null,[Validators.required, ValidationService.emailValidator() ]),
      password:new FormControl<string>(null,[Validators.required, Validators.minLength(8)])

    })
  constructor(
    private fb:FormBuilder,
    private authSevice:AuthService,
    private _snackBar: MatSnackBar,
    private router:Router
    )
  {}
  ngOnInit(): void {
    this.authSevice.logout();
  }
  async login():Promise<void>
  {
    if(this.form.valid)
      await this.authSevice.login(this.form.value.email, this.form.value.password)
      .then(()=>{
        this.router.navigate(["todo"]);
      }
      )
      .catch(()=>
      {
        this.openSnackBar();
      })
  }
  openSnackBar() {
    this._snackBar.open('Invalid email or password', null, {
      verticalPosition: "top",
      duration:3*1000
    });
  }
}
