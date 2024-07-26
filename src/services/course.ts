import dbConnect from "@/lib/dbConnect";
import CourseModel from "@/models/course";
import { ChatOpenAI } from "@langchain/openai";
import { JsonOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { Course } from "@/types";
import { v4 } from "uuid";

const model = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
});
export default async function getCourseService() {
  const service = new CourseService();
  await service.init();
  return service;
}

class CourseService {
  private Course = CourseModel;
  private expectedOutput = `
respond with valid json objet of this format
{
  bannerName: string;
  courseName: string;
  bannerColor: string;
  courseDescription: string;
  modules: [
    {
      moduleName: string;
      lessons: [
        {
          lessonName: string;
          lessonDescription: string;
        },
      ];
    },
  ];
}

`;
  private coursePrompt = `
you are a master at creating courses with given input, 
given an input create a course outline with modules and lessons.
each modeules should have lessons and each lesson should have a name, a course should have a description of what it will teach and a title name, also return bannerName and banner 
which refer to name on banner , bannerColor should be a css gradint string example: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%), return sutable linear-gradient for the prompt. return json 
generated course should contain all the modules requre to go from zero to hero, no cutting coreners, dosent matter how big the course becommes

input prompt = 

    `;

  async init() {
    await dbConnect();
  }

  async getAllCourse() {
    const courses = await this.Course.find().select(
      "bannerName courseName _id bannerColor courseDescription",
    );
    return courses;
  }

  async getCourseByID(id: string) {
    const course = await this.Course.findById(id);
    return course;
  }
  async saveCourse(course: Course) {
    const createdCourse = await this.Course.create(course);
    return createdCourse;
  }

  async generateCourseOutline(coursePrompt: string) {
    try {
      const parser = new JsonOutputParser<Course>();
      const prompt = ChatPromptTemplate.fromTemplate(
        "\n{format_instructions}\n{prompt}\n",
      );
      const partialedPrompt = await prompt.partial({
        format_instructions: this.expectedOutput,
      });

      const chain = partialedPrompt.pipe(model).pipe(parser);

      const res = await chain.invoke({
        prompt: this.coursePrompt + coursePrompt,
      });

      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
