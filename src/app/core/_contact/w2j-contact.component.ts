import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'w2j-contact',
  templateUrl: './w2j-contact.component.html',
  styleUrls: ['./w2j-contact.component.scss'],
})
export class W2jContactComponent implements OnInit {
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

  constructor(private formBuilder: FormBuilder) {
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
}
