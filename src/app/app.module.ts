import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomeregisterComponent } from './customeregister/customeregister.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ApplicationdocComponent } from './applicationdoc/applicationdoc.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TrackerComponent } from './tracker/tracker.component';
import { RouterModule } from '@angular/router';
import { EmicalComponent } from './emical/emical.component';
import { EligcalComponent } from './eligcal/eligcal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    CustomeregisterComponent,
    CalculatorComponent,
    ApplicationdocComponent,
    DocumentComponent,
    HomeComponent,
    TrackerComponent,
    EmicalComponent,
    EligcalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
