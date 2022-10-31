import { Component, OnInit,Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-footer',
  templateUrl: './course-footer.component.html',
  styleUrls: ['./course-footer.component.css']
})
export class CourseFooterComponent implements OnInit {

  @Input('course')
  course!:Course;

  constructor() { }

  ngOnInit(): void {
  }

}
