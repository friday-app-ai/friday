import { Course } from "@/types";
import mongoose, { Schema } from "mongoose";


const courseSchema = new Schema<Course>({
  bannerName:String,
  courseName: String,
  bannerColor: String,
  courseDescription: String,
  modules: [
    {
      moduleName: String,
      lessons: [
        {
          lessonName: String,
          lessonDescription: String,
        },
      ],
    },
  ],
});

const CourseModel =
  mongoose?.models?.Course || mongoose?.model<Course>("Course", courseSchema);
export default CourseModel;
