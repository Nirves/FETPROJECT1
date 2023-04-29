import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OptionComponent } from './option/option.component';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { TeacherdetailComponent } from './teacherdetail/teacherdetail.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    OptionComponent,
    NewstudentComponent,
    TeacherdetailComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
