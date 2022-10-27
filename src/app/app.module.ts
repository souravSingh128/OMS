import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.service';
import { AuthGuardGuard } from './auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialExampleModule} from '../material.models';
import { ProductComponent } from './product/product.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  providers: [AuthService, AuthGuardGuard, AppComponent, CookieService],
  // providers: [AuthService, ActivateRouteGuard, AppComponent, CookieService, { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
