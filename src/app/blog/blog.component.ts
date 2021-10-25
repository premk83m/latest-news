import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  isEnabled = false;
  constructor(public router: Router) { }

  public href: any = '';
  url: any = '';

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.href);
    if (this.href === '/blog'){
      this.isEnabled = true;
    }
  }

}
