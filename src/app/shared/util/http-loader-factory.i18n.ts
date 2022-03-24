<<<<<<< HEAD
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
=======
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
>>>>>>> 8099684373b3a43d34fcb6c4d9b729d2d523e526
}