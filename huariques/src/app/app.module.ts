import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';

import {NgForm} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    LoginComponent,
    RegisterComponent
  ]
})
export class AppModule { }
