import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogList } from 'src/app/data-model/blog-data.model';
import { AddblogService } from '../admin/services/addblog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listblog-view',
  templateUrl: './listblog-view.component.html',
  styleUrls: ['./listblog-view.component.css']
})
export class ListblogViewComponent implements OnInit {

  blogpost: BlogList = new BlogList();
  bloglist: BlogList[] = [];

  constructor(private addblogservice: AddblogService, public router: Router) { }

  ngOnInit(): void {
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

