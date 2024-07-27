import GetLessonService from "@/services/lesson";

export async function PATCH(req: Request) {
  try {
    const { lessonId, stepId } = (await req.json()) as {
      lessonId: string;
      stepId: string;
    };
    const lessonService = await GetLessonService();
    await lessonService.setLessonStep(lessonId, stepId);
    return new Response("Lesson updated succfully", { status: 201 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
