import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Course } from './interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent  {

  courses?: Course[] = [
    {
      id: 1,
      title: "Lol",
      leader: "Lol1",
    },
    {
      id: 1,
      title: "Lol",
      leader: "Lol1",
    },
    {
      id: 1,
      title: "Lol",
      leader: "Lol1",
    },
    {
      id: 1,
      title: "Lol",
      leader: "Lol1",
    },
  ];

  isNotHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => !result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
