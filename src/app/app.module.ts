import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialLibModule} from './shared/material-lib.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './views/login/login.component';
import {SignupComponent} from './views/signup/signup.component';
import {AuthentificationComponent} from './views/authentification/authentification.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor, authInterceptorProviders} from './helpers/auth.interceptor';
import { RegistrationComponent } from './views/registration/registration.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AuthentificationComponent,
    RegistrationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialLibModule,
    HttpClientModule
  ],
  exports: [
    MaterialLibModule
  ],
  providers: [authInterceptorProviders],

  bootstrap: [AppComponent]
})
export class AppModule {
}
