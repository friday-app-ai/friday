// export interface LessonContent {
//   _id?: string;
//   technology: string;
//   lesson_name: string;
//   explanation: { point: string; description: string; code: string[] }[];
// }
//
//
import { LessonContent } from "@/types";
import mongoose, { Schema } from "mongoose";


const lessonContentSchema = new Schema<LessonContent>({
  technology:String,
  lesson_name: String,
  explanation: [
    {
      point: String,
      description: String,
      code: [String],
      isDoubt: Boolean,
    },
  ],
  lessonId: String,
  userEmail: String,
  completedTill: String,
});

const lessonContentModel =
  mongoose?.models?.lessonContent ||
  mongoose?.model<LessonContent>("lessonContent", lessonContentSchema);
export default lessonContentModel;
