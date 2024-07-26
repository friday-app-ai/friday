import getCourseService from "@/services/course";

export async function POST(req: Request) {
  try {
    const { prompt } = (await req.json()) as { prompt: string };
    if (!prompt) {
      return new Response("Prompt is missing", { status: 400 });
    }
    const courseService = await getCourseService();
    const course = await courseService.generateCourseOutline(prompt);
    const createdCourse = await courseService.saveCourse(course);
    return Response.json(createdCourse, { status: 200 });
  } catch (error) {
    console.log("error in /course/generate[GET] ", error);
    return new Response("Something went wrong", { status: 500 });
  }
}
