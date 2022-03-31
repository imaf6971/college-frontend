import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../interfaces/course';
import { AbstractCourseService } from './course.service.abstract';

@Injectable({
  providedIn: 'root'
})
export class CourseService implements AbstractCourseService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCourses(): Observable<Course[]> {
    return this.http
      .get<Course[]>(`${environment.apiUrl}/api/v1/courses`);
  }

  public getCourseById(id: number): Observable<Course> {
    return this.http
      .get<Course>(`${environment.apiUrl}/api/v1/courses/${id}`);
  }

}
