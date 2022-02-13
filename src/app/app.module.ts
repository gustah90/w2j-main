import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { W2jHomeComponent } from './_components/w2j-home/w2j-home.component';
import { W2jUsComponent } from './_components/w2j-us/w2j-us.component';
import { W2jServicesComponent } from './_components/w2j-services/w2j-services.component';
import { W2jContactComponent } from './_components/w2j-contact/w2j-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    W2jHomeComponent,
    W2jUsComponent,
    W2jServicesComponent,
    W2jContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
