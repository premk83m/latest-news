import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ExportProd } from '../data-model/product-data.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpProductService {

  constructor(private httpClient: HttpClient) {}

  apiUrl = '';
  createapiUrl = '';
  editapiUrl = '';
  updateapiUrl = '';
  deleteapiUrl = '';

  getExportProduct(): Observable<ExportProd[]>{
    return this.httpClient.get<ExportProd[]>(this.apiUrl);
  }

  productCreate(product: ExportProd): Observable<ExportProd>{
    return this.httpClient.post<ExportProd>(this.createapiUrl, product);
  }

  productUpdate(product: ExportProd): Observable<ExportProd>{
    console.log(product);
    return this.httpClient.put<ExportProd>(this.updateapiUrl, product);
  }

  getProductId(id: any): Observable<ExportProd>{
    return this.httpClient.get<ExportProd>(this.editapiUrl + '/' + id);
  }

  deleteProductId(id: any): Observable<ExportProd>{
    return this.httpClient.delete<ExportProd>(this.deleteapiUrl + '/' + id);
  }

}
