export interface User {
  email: string;
  password: string;
  name: string;
  courses?: string[];
}

export interface Course {
  _id?: string;
  bannerName: string;
  courseName: string;
  bannerColor: string;
  courseDescription: string;
  modules: Module[];
}

export interface Module {
  moduleName: string;
  lessons: Lesson[];
}

export interface Lesson {
  _id?: string;
  lessonName: string;
  lessonDescription: string;
}
