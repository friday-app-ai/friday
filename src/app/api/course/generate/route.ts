import getCourseService from "@/services/course";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const prompt = url.searchParams.get("prompt");
    if (!prompt) {
      return new Response("Prompt is missing", { status: 400 });
    }
    const courseService = await getCourseService();
    const course = await courseService.generateCourseOutline(prompt);
    await courseService.saveCourse(course);
    return Response.json(course, { status: 200 });
  } catch (error) {
    console.log("error in /course/generate[GET] ", error);
    return new Response("Something went wrong", { status: 500 });
  }
}
