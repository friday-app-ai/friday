import GetLessonService from "@/services/lesson";

export async function PATCH(req: Request) {
  try {
    const {
      index,
      lessonId,
      lessonName,
      courseName,
      code,
      description,
      doubt,
    } = (await req.json()) as {
      index: number;
      lessonId: string;
      lessonName: string;
      courseName: string;
      code: string[];
      description: string;
      doubt: string;
    };
    const lessonService = await GetLessonService();
    const doubtExplanation = await lessonService.generateDoubt(
      lessonName,
      courseName,
      code,
      description,
      doubt,
    );
    const expFromDb = await lessonService.addDoubt(
      lessonId,
      index,
      doubtExplanation.point,
      doubtExplanation.description,
      doubtExplanation.code as [],
    );
    return Response.json(expFromDb);
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
}
