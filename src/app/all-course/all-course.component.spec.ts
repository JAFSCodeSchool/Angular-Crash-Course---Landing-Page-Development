import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCourseComponent } from './all-course.component';

describe('AllCourseComponent', () => {
  let component: AllCourseComponent;
  let fixture: ComponentFixture<AllCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
