import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  filteredCourses: Course[] = [];

  categories: string[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllCourses()
  }

  getAllCourses() {
    this.httpClient.get('assets/data/courses.json').subscribe({
      next: (courses) => {
        this.courses = courses as Course[];
        this.filteredCourses = courses as Course[];
        this.getCategories()
      },
      error: (errors) => {
        console.log(errors)
      }
    })
  }

  getCategories() {
    this.categories = this.courses.map((course) => { return course.category })
    this.categories = [...new Set(this.categories)]
  }

  filterCourses(category: string) {
    this.filteredCourses = this.courses.filter(course=>course.category===category)
  }

}
