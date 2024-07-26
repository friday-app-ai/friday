import { NextApiRequest, NextApiResponse } from "next";
import GetLessonService from "@/services/lesson";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const technology_tech_course_name = req.body.technology_tech_course_name;
  const lesson_name = req.body.lesson_name;
  const lessonService = await GetLessonService();
  const lesson = lessonService.generateLesson(
    technology_tech_course_name,
    lesson_name,
  );
  res.status(200).json(lesson);
}
