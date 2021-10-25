import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddblogService } from '../services/addblog.service';
import { BlogList } from 'src/app/data-model/blog-data.model';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blogpost: BlogList = new BlogList();
  bloglist: BlogList[] = [];

  constructor(private addblogservice: AddblogService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(createForm: NgForm){
    this.addblogservice.createPost(createForm.value)
    .subscribe(() => {
      this.router.navigate(['admin/manage-blog/view-blog']);
    });
   }
}
