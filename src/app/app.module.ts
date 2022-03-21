import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { W2jHomeComponent } from './core/_home/w2j-home.component';
import { W2jUsComponent } from './core/_know-us/w2j-us.component';
import { W2jServicesComponent } from './core/_services/w2j-services.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { FooterComponent } from './core/_footer/footer.component';

import { NgxMaskModule } from 'ngx-mask';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app/shared/util/http-loader-factory.i18n';
import { Language } from '../app/shared/domain/enum/language.enum';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { W2jContactComponent } from './core/_contact/w2j-contact.component';
import { MailService } from './mail.service';

@NgModule({
  declarations: [
    AppComponent,
    W2jHomeComponent,
    W2jUsComponent,
    W2jServicesComponent,
    W2jContactComponent,
    ModalComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: Language.PORTUGUESE,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [MailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
