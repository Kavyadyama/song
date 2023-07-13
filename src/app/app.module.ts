import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { SingerComponent } from './singer/singer.component';
import { TypesComponent } from './types/types.component';

import { KannadaComponent } from './kannada/kannada.component';
import { EnglishComponent } from './english/english.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,

    SingerComponent,
    TypesComponent,

    KannadaComponent,
    EnglishComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
