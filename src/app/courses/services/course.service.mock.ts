import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Course } from "../interfaces/course";
import { AbstractCourseService } from "./course.service.abstract";

@Injectable({
  providedIn: 'root'
})
export class CourseServiceMock implements AbstractCourseService {

  private courses: Course[] = [
    {
      id: 1,
      title: 'Культурно-массовое',
      leader: 'Топтыжкин А. Б.',
      students: [
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
      ]
    },
    {
      id: 2,
      title: 'Экологическое',
      leader: 'Активистов А. Б.',
      students: [
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
        {
          name: 'Студентов В. А',
          group: 'ГР-22/1'
        },
      ]
    }
  ]

  getAllCourses(): Observable<Course[]> {
    return of(this.courses);
  }


}

