import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
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
    private formBuilder: FormBuilder,
    private mail: MailService,
    private toastr: ToastrService,
    private translateService: TranslateService
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

  onSubmit(FormData: any) {
    this.isLoading = true;
    this.FormData.reset();

    this.mail.PostMessage(FormData).subscribe({
      next: (res) => {

      },
      error: (err) => {
        this.toastr.error(
          this.translateService.instant('CONTACT.FORM.FEEDBACK.TOAST-ERROR')
        );
      },
    });
  }
}
