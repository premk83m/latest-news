import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogList } from 'src/app/data-model/blog-data.model';
import { AddblogService } from '../services/addblog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  constructor(private router: Router) { }
  public href: any = '';
  url: any = '';

  ngOnInit(): void {
  this.href = this.router.url;
  // console.log(this.href);
  }

}
