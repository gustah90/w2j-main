import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../app/shared/domain/enum/language.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'w2j';

  w2jForm!: FormGroup;
  name: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  phone: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(16),
  ]);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  message: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(16),
    Validators.maxLength(256),
  ]);
  isLoading: boolean = false;

  constructor(private translate: TranslateService, private formBuilder: FormBuilder) {
    const browserLang = this.translate.getBrowserCultureLang();

    switch (browserLang) {
      case Language.PORTUGUESE:
        this.translate.setDefaultLang(Language.PORTUGUESE);
        break;
      case Language.SPANISH:
        this.translate.setDefaultLang(Language.SPANISH);
        break;
      default:
        this.translate.setDefaultLang(Language.ENGLISH);
        break;
    }

    this.w2jForm = this.formBuilder.group({
      name: this.name,
      phone: this.phone,
      email: this.email,
      message: this.message,
    });
  }

  ngOnInit(): void {
    this.w2jForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: [
        '',
        [Validators.required,
        Validators.minLength(16),
        Validators.maxLength(256),
      ]],
    });
  }

  get w2jFormControls() {
    return this.w2jForm.controls;
  }

  onSubmit() {
    this.isLoading = true;
    this.w2jForm.reset();
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  isOpenMenu = false;

  openMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
