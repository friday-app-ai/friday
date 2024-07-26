import getCourseService from "@/services/course";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const courseId = url.searchParams.get("courseId");
    const courseService = await getCourseService();
    if (courseId) {
      const course = await courseService.getCourseByID(courseId);
      return Response.json(course, { status: 200 });
    } else {
      const courses = await courseService.getAllCourse();
      return Response.json(courses, { status: 200 });
    }
  } catch (error) {
    return new Response("some thing went wrong ", { status: 500 });
  }
}
