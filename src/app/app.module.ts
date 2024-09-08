import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertDemoComponent } from './showcase/alert-demo/alert-demo.component';
import { AlertComponent } from "./ui/alert/alert.component";

@NgModule({
  declarations: [
    AppComponent,       
    AlertDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AlertComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
