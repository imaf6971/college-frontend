import { CourseService } from "src/app/courses/services/course.service";
import { AbstractCourseService } from "src/app/courses/services/course.service.abstract";

export const environment = {
  production: true,
  apiUrl: "localhost:8080",
  providers: [{
    provide: AbstractCourseService,
    useClass: CourseService
  }]
};
