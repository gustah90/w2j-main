import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { W2jHomeComponent } from './core/_home/w2j-home.component';
import { W2jUsComponent } from './core/_know-us/w2j-us.component';
import { W2jServicesComponent } from './core/_services/w2j-services.component';
import { W2jContactComponent } from './core/_contact/w2j-contact.component';

import { NgxMaskModule } from 'ngx-mask';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';

import { HttpLoaderFactory } from '../app/shared/util/http-loader-factory.i18n';
import { Language } from '../app/shared/domain/enum/language.enum';


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
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: Language.ENGLISH,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
