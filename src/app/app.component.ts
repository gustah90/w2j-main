import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../app/shared/domain/enum/language.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const browserLang = this.translate.getBrowserCultureLang();

    switch (browserLang) {
      case Language.ENGLISH:
        this.translate.setDefaultLang(Language.ENGLISH);
        break;
      case Language.SPANISH:
        this.translate.setDefaultLang(Language.SPANISH);
        break;
      default:
        this.translate.setDefaultLang(Language.PORTUGUESE);
        break;
    }
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  isOpenMenu = false;

  openMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
