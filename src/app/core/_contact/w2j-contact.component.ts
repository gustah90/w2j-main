import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';
import { MailService } from '../../../app/mail.service';

@Component({
  selector: 'w2j-contact',
  templateUrl: './w2j-contact.component.html',
  styleUrls: ['./w2j-contact.component.scss'],
})
export class W2jContactComponent implements OnInit {
  FormData!: FormGroup;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private mail: MailService) {}

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
    console.log(FormData, this.isLoading, 1234567890);

    this.mail.PostMessage(FormData).subscribe(
      (response) => {
        //location.href = 'https://formspree.io/f/xknybpyo';
        console.log({ FormData });
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
