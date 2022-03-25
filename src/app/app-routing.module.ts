import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ApplicationdocComponent } from './applicationdoc/applicationdoc.component';
import { CustomeregisterComponent } from './customeregister/customeregister.component';
import { DocumentComponent } from './document/document.component';
import { EligcalComponent } from './eligcal/eligcal.component';
import { EmicalComponent } from './emical/emical.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [
  {path:'customeregister',component:CustomeregisterComponent},
  {path:'login',component:LoginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'applicationdoc',component:ApplicationdocComponent},
  {path:'document',component:DocumentComponent},
  {path:'tracker',component:TrackerComponent},
  {path:'emical',component:EmicalComponent},
  {path:'eligcal',component:EligcalComponent},
  {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
