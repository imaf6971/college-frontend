import { Student } from "./student";

export interface Course {
  id: number;
  title: string;
  leader: string;
  students: Student[];
}
