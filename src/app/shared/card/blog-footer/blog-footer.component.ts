import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.css']
})
export class BlogFooterComponent implements OnInit {

  @Input('blog')
  blog!:Blog;
  
  constructor() { }

  ngOnInit(): void {
  }

}
