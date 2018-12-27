import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../common/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})

export class LoginModule {

}
