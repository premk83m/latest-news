import { Component, OnInit } from '@angular/core';
import { Location, DOCUMENT, PlatformLocation } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.css']
})
export class ManageBlogComponent implements OnInit {

  constructor(private router: Router, private activateroute: ActivatedRoute) { }
  public href: any = '';
  url: any = '';

  ngOnInit(): void {
  this.href = this.router.url;
  console.log(this.href);

  console.log(location.origin);
  console.log(location.href);
  console.log(location.pathname);
  }
}
