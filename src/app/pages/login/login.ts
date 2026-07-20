import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../core/services/login';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  //#region Declarations&injection
  isLoading = signal(false);
  cradentionalInvalid = signal('');
  showPassword = false;
  _loginService=inject(LoginService);
  //#endregion

  //#region LoginForm
   loginForm :FormGroup =new FormGroup({
   UserID: new FormControl('',[Validators.required]),
   UserPwd: new FormControl('',[Validators.required]),
   })
  //#endregion

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  loginNow() {
  console.log('loginNow called');

  if (this.loginForm.valid) {
    this.isLoading.set(true);
    console.log('isLoading true')
    this._loginService.SubmitLogin(this.loginForm.value)
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        })
      )
      .subscribe({
        next: (res) =>{
          this.isLoading.set(false);
          this.cradentionalInvalid.set(res.Description);
        } ,
        error: (err) =>{
          
          this.isLoading.set(false);
                   
        } 
      });
  }
}


}
