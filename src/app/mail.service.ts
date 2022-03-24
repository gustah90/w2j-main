<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { MailModel } from '../app//core/_contact/mail-model';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private api = 'https://formspree.io/f/xknybpyo';

  constructor(private http: HttpClient) {}

  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map((res: any) => {
        if (res.response) {
          return res.response;
        }
      }),
      retry(3),
      catchError(err => {
        throw 'error in source. Details: ' + err;
      }),
    );
  }
}
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { MailModel } from '../app//core/_contact/mail-model';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private api = 'https://formspree.io/f/xknybpyo';

  constructor(private http: HttpClient) {}

  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map((res: any) => {
        if (res.response) {
          return res.response;
        }
      }),
      retry(3),
      catchError(err => {
        throw 'error in source. Details: ' + err;
      }),
    );
  }
}
>>>>>>> 8099684373b3a43d34fcb6c4d9b729d2d523e526
