import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderfooterComponent } from './headerfooter/headerfooter.component';
import { FootComponent } from './foot/foot.component';
import { ArtformsComponent } from './artforms/artforms.component';
import { FourComponent } from './four/four.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordpageComponent } from './forgetpasswordpage/forgetpasswordpage.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { OfferspageComponent } from './offerspage/offerspage.component';
import { NewspageComponent } from './newspage/newspage.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderfooterComponent,
    FootComponent,
    ArtformsComponent,
    FourComponent,
    OneComponent,
    TwoComponent,
    ForgetpasswordpageComponent,
    ProductlistComponent,
    OfferspageComponent,
    NewspageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
