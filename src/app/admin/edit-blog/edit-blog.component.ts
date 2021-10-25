import { Component, OnInit, ErrorHandler } from '@angular/core';
import { BlogList } from 'src/app/data-model/blog-data.model';
import { AddblogService } from '../services/addblog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  id: number;
  postid: number;
  blogpost: BlogList = new BlogList();
  bloglist: BlogList[] = [];
  bloglists: any = [];

  constructor(private addblogservice: AddblogService, private router: Router, private activateroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activateroute.params.subscribe(params =>
      {
        this.postid = +params.id;
      });
    this.editBlogPosts(this.postid);
    }

  editBlogPosts(postid: any){
  this.addblogservice.getAllposts()
      .subscribe((data) =>
      {
      this.bloglist = data;
      for (let i = 0; i <= this.bloglist.length; i++){
       if (this.bloglist[i].id === this.postid) {
        this.bloglists = this.bloglist[i];
        break;
         }
        }
      });
   }
   onSubmit(editForm: NgForm){
     this.addblogservice.updatePost(editForm.value)
      .subscribe(() => {
        this.router.navigate(['admin/manage-blog/view-blog']);
      });

   }
}
