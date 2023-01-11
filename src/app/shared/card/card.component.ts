import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('input')
  input!:Course|Blog;

  @Input('type')
  type = 'C' // C,B
  
  constructor() { }

  castToCourse(input:Course|Blog){
    return input as Course;
  }

  castToBlog(input:Course|Blog){
    return input as Blog;
  }

  ngOnInit(): void {
  }

}
