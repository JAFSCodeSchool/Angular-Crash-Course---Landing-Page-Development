import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs:Blog[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllBlogs()
  }

  getAllBlogs() {
    this.httpClient.get('assets/data/blogs.json').subscribe({
      next: (blogs) => {
        this.blogs = blogs as Blog[];
      },
      error: (errors) => {
        console.log(errors)
      }
    })
  }

}
