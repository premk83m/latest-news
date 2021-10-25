import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl = 'http://localhost/arogiyam-site/src/app/api/contact-fetch.php';

  constructor(private httpClient: HttpClient ) {}

  getConstcontact(): Observable<any> {
     return this.httpClient.get<any>(this.apiUrl);
  }
}
