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

export interface LessonContent {
  _id?: string;
  technology: string;
  lesson_name: string;
  explanation: Explanation[];
  lessonId: string;
  userEmail: string;
  completedTill: string;
}
export interface Explanation {
  _id: string;
  point: string;
  description: string;
  code?: string[];
  isDoubt: boolean;
}
