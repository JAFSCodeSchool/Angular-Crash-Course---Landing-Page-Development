import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  @Input('courses')
  courses: Course[] = [];

  @ViewChild('slideContainer')
  slideContainer!: ElementRef;

  categories: string[] = [];

  sliderContainerWidth = 0;
  slideWidth = 0;
  elementsToShow = 1;
  sliderWidth = 0;

  sliderMarginLeft = 0;

  @HostListener('window:resize', ['$event'])
  onScreenResize() {
    this.setUpSlider()
  }


  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.getCategories()
    this.setUpSlider()
  }

  setUpSlider() {
    if (window.innerWidth < 500)
      this.elementsToShow = 1;
    else if (window.innerWidth < 900)
      this.elementsToShow = 2;
    else if (window.innerWidth < 1300)
      this.elementsToShow = 3
    else
      this.elementsToShow = 5

    let container = this.slideContainer.nativeElement as HTMLElement;

    this.sliderContainerWidth = container.clientWidth;
    this.slideWidth = this.sliderContainerWidth / this.elementsToShow;
    this.sliderWidth = this.slideWidth * this.categories.length;

    console.log(this.sliderContainerWidth)
    console.log(this.sliderWidth)
    console.log(this.slideWidth)
  }

  getCategories() {
    this.categories = this.courses.map((course) => { return course.category })
    this.categories = [...new Set(this.categories)]
  }

  prev() {
    if (this.sliderMarginLeft === 0) {
      return
    }

    this.sliderMarginLeft = this.sliderMarginLeft + this.slideWidth;
  }

  next() {
    const notShowingElementsCount = this.categories.length - this.elementsToShow;
    const possibleMargin = -(notShowingElementsCount * this.slideWidth);
    if (this.sliderMarginLeft <= possibleMargin) {
      return
    }
    this.sliderMarginLeft = this.sliderMarginLeft - this.slideWidth;
  }

}
