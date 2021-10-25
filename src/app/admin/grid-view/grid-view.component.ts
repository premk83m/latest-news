import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogList } from 'src/app/data-model/blog-data.model';
import { AddblogService } from '../services/addblog.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

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
  deletePosts(bloglist: BlogList): void{
    Swal.fire({
      title: 'Are you sure! you want to Delete?',
      text: 'Once deleted, you will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        );
        this.addblogservice.deletePost(bloglist.id)
        .subscribe((data) => {
          this.blogpost = data;
          this.router.navigate(['admin/manage-blog/view-blog']);
          this.ViewAllPosts();
         });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your data is safe :)',
          'error'
        );
      }
    });
    }
  postEdit(blogpost: BlogList): void {
    this.router.navigate(['admin/manage-blog/edit-blog', blogpost.id]);
  }
}
