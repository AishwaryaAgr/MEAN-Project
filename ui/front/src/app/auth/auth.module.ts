import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewuserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [NewuserComponent, LoginComponent, ForgotComponent, LogoutComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
