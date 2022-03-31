import { Observable } from "rxjs";
import { Course } from "../interfaces/course";

export abstract class AbstractCourseService {
  public abstract getAllCourses(): Observable<Course[]>;
  public abstract getCourseById(id: number): Observable<Course>;
}

