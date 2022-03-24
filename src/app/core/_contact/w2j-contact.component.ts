import { Component, Inject, Injector, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { MailService } from '../../../app/mail.service';

@Component({
  selector: 'w2j-contact',
  templateUrl: './w2j-contact.component.html',
  styleUrls: ['./w2j-contact.component.scss'],
})
export class W2jContactComponent implements OnInit {
  FormData!: FormGroup;
  isLoading: boolean = false;

  constructor(
    @Inject(Injector) private readonly injector: Injector,
    private formBuilder: FormBuilder,
    private mail: MailService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.FormData = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(256),
      ]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(256),
      ]),
    });
  }

  private get translate(): TranslateService {
    return this.injector.get(TranslateService);
  }

  onSubmit(FormData: any) {
    this.isLoading = true;
    this.FormData.reset();

    this.mail.PostMessage(FormData).subscribe({
      next: (res) => {
        //location.href = 'https://www.instagram.com';
      },
      error: (err) => {
        this.toastr.error(
          this.translate.instant('CONTACT.FORM.FEEDBACK.TOAST-ERROR')
        );
      },
    });
  }
}
