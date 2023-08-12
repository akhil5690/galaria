import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { MyartpageComponent } from './myartpage/myartpage.component';
import { UploadpageComponent } from './uploadpage/uploadpage.component';

import { CartpageComponent } from './cartpage/cartpage.component';
import { GallerypageComponent } from './gallerypage/gallerypage.component';
import { ShoppageComponent } from './shoppage/shoppage.component';
import { ForgetpasswordpageComponent } from './forgetpasswordpage/forgetpasswordpage.component';

const routes: Routes = [

  {path :'loginpage', component:LoginpageComponent},
  {path :'mainpage', component:MainpageComponent},
  {path :'registerpage', component:RegisterpageComponent},
  {path :'homepage', component:HomepageComponent},
  {path :'myartpage', component:MyartpageComponent},
  {path :'gallerypage', component:GallerypageComponent},
  {path :'uploadpage', component:UploadpageComponent},
  {path :'shoppage', component:ShoppageComponent},
  {path :'cartpage', component:CartpageComponent},
  {path :'forgetpasswordpage', component:ForgetpasswordpageComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[UploadpageComponent,
  CartpageComponent,
  GallerypageComponent,
  ShoppageComponent,
  UploadpageComponent,
  MyartpageComponent,
  LoginpageComponent,
  RegisterpageComponent,
  MainpageComponent,
  HomepageComponent,
  ForgetpasswordpageComponent]