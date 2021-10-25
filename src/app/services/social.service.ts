import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../data-model/data.model';
import { Social } from '../data-model/social-data.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocialService {

  apiUrl = 'http://localhost/arogiyam-site/src/app/api/social_details.php';

  constructor(private httpClient: HttpClient ) {}

  getConstsocialpod(): Observable<Social[]> {
     return this.httpClient.get<Social[]>(this.apiUrl);
  }
}

