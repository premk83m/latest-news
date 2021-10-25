import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {

  constructor(private httpclient: HttpClient) { }

  urlAPI = 'http://cdn.contentful.com/spaces/c0v7kvye2hku/environments/master/entries';
  Authorization = 'Bearer 1TrqnlFtU5XmsWL3b_XXSXjdCheg6PTylpULNUQ41_o';


  getTrainersDatafromAPI(): Observable<any>{

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer 1TrqnlFtU5XmsWL3b_XXSXjdCheg6PTylpULNUQ41_o');

    let params = new HttpParams()
    .set('content_type', 'trainer');

    // let options = new RequestOptions({ headers: myHeaders, params: myParams });

    //  const httpOptions = {
    //   headers: { 'Authorization': 'Bearer 1TrqnlFtU5XmsWL3b_XXSXjdCheg6PTylpULNUQ41_o' },
    //    params: {'content_type': 'trainer'}
    //  };
    // let options = new RequestOptions({ headers: myHeaders, params: myParams });

    return this.httpclient.get(this.urlAPI, {params: params, headers: headers});

  }

}
