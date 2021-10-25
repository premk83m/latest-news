import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogList } from 'src/app/data-model/blog-data.model';
import { AddblogService } from '../admin/services/addblog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gridblog-view',
  templateUrl: './gridblog-view.component.html',
  styleUrls: ['./gridblog-view.component.css']
})
export class GridblogViewComponent implements OnInit {

  blogpost: BlogList = new BlogList();
  bloglist: BlogList[] = [];
  isEnabled: boolean = false;

  constructor(private addblogservice: AddblogService, public router: Router) { }
  public href: any = '';
  url: any = '';

  ngOnInit(): void {
    this.href = this.router.url;
    if (this.href === '/blog'){
      this.isEnabled = true;
    }
    this.ViewAllPosts();
  }
  ViewAllPosts(){
    this.addblogservice.getAllposts()
    .subscribe((data) =>
    {
      this.bloglist = data;
    });
    }
}
