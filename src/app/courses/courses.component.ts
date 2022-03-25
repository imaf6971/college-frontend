import { Component } from '@angular/core';
import { Course } from './interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent  {

  courses?: Course[];

  constructor() { }

}
