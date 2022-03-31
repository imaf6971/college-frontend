import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Course } from './interfaces/course';
import { AbstractCourseService } from './services/course.service.abstract';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses?: Course[];

  isNotHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => !result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private courseService: AbstractCourseService
    ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getAllCourses().subscribe(courses =>
      this.courses = courses
    );
  }
}
