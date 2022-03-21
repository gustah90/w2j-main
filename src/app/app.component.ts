import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../app/shared/domain/enum/language.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('toggleIcon') toggleIcon!: ElementRef;

  isOpened = false;

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2
  ) {
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

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
      this.openMenu(e);
    });
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  openMenu(evt: Event) {
    if (this.toggleButton !== undefined) {
      if (
        evt.target === this.toggleButton.nativeElement ||
        evt.target === this.toggleIcon.nativeElement
      ) {
        this.isOpened = !this.isOpened;
      } else {
        this.isOpened = false;
      }
    }
  }
}
