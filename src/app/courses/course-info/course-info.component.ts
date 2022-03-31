import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../interfaces/course';
import { AbstractCourseService } from '../services/course.service.abstract';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {

  course?: Course;

  constructor(
    private route: ActivatedRoute,
    private service: AbstractCourseService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.getCourseById(parseInt(id)).subscribe(
      course => this.course = course
    );
  }

}
