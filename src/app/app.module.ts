import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { SingerComponent } from './singer/singer.component';
import { TypesComponent } from './types/types.component';
=======
import { KannadaComponent } from './kannada/kannada.component';
import { EnglishComponent } from './english/english.component';
>>>>>>> 413a47eccdc42e6227ee101b1e4bdf27cadfd714

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
<<<<<<< HEAD
    SingerComponent,
    TypesComponent
=======
    KannadaComponent,
    EnglishComponent
>>>>>>> 413a47eccdc42e6227ee101b1e4bdf27cadfd714
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
