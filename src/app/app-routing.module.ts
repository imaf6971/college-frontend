import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponent } from './courses/course-info/course-info.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: "courses",
    component: CoursesComponent
  },
  {
    path: 'courses/:id',
    component: CourseInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
