import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { MainheadComponent } from './mainhead/mainhead.component';
import { NavbarmainComponent } from './navbarmain/navbarmain.component';
import { BodymainComponent } from './bodymain/bodymain.component';
import { AdbannerComponent } from './adbanner/adbanner.component';
import { ItembodyComponent } from './itembody/itembody.component';
import { FootermainComponent } from './footermain/footermain.component';
import { AppRoughtingModule } from './app-roughting.module';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    RegisterComponent,
    HeaderComponent,
    MainheadComponent,
    NavbarmainComponent,
    BodymainComponent,
    AdbannerComponent,
    ItembodyComponent,
    FootermainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoughtingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
