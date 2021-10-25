import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlogList } from 'src/app/data-model/blog-data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddblogService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  apiUrl = 'http://localhost:3000/posts';

  constructor(private httpclient: HttpClient) { }

  getAllposts(): Observable<BlogList[]>{
    return this.httpclient.get<BlogList[]>(this.apiUrl);
  }
  createPost(bloglist: BlogList): Observable<BlogList> {
    return this.httpclient.post<BlogList>(this.apiUrl, bloglist, {headers: this.httpHeaders});
  }
  updatePost(bloglist: BlogList): Observable<BlogList> {
    return this.httpclient.put<BlogList>(this.apiUrl + '/' + bloglist.id, bloglist, {headers: this.httpHeaders});
  }
  deletePost(id: any): Observable<BlogList> {
    return this.httpclient.delete<BlogList>(this.apiUrl + '/' + id, {headers: this.httpHeaders});
  }
}
