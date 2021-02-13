import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import Amplify, { API } from 'aws-amplify';
import { HttpClientModule } from '@angular/common/http';
import { freeApiService } from './services/freeapi.service';
import { NavigComponent } from './navig/navig.component';
import { RouterModule } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    NavigComponent,
    BmiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    FormsModule,
  
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'reg', component: NavigComponent },
      { path: 'bmi', component: BmiComponent },
    ])
    
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
