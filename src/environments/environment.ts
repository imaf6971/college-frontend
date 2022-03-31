// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AbstractCourseService } from "src/app/courses/services/course.service.abstract";
import { CourseServiceMock } from "src/app/courses/services/course.service.mock";

export const environment = {
  production: false,
  apiUrl: "localhost:8080",
  providers: [{
    provide: AbstractCourseService,
    useClass: CourseServiceMock
  }]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
