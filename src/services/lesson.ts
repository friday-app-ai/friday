import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import dbConnect from "@/lib/dbConnect";
import lessonContentModel from "@/models/lessonContent";
import { JsonOutputParser } from "@langchain/core/output_parsers";
import { LessonContent } from "@/types";

export default async function GetLessonService() {
  const service = new LessonService();
  await service.init();
  return service;
}

export class LessonService {
  private Lesson = lessonContentModel;
  async init() {
    await dbConnect();
  }
  async generateLesson(
    technology_tech_course_name: string,
    lesson_name: string,
  ) {
    const model = new ChatOpenAI({
      model: "gpt-4o",
      modelKwargs: {
        response_format: { type: "json_object" },
      },
    });

    const output_example_JSON = `
      { "technology": "python", "lesson_name": "Indexing and Slicing with Strings", "explanation": [ { "point": "Indexing", "description": "Indexing in Python starts at 0. Positive indexing goes from left to right, starting from 0, while negative indexing goes from right to left, starting from -1." }, { "point": "Slicing Syntax", "description": "Slicing allows access to a range of characters in a string using the syntax string[start:stop:step]. The start index is inclusive, and the stop index is exclusive." }, { "point": "Accessing Single Characters", "description": "Use indexing to access single characters in a string.", "code": [ "text = 'Python'", "print(text[0]) # Output: P", "print(text[-1]) # Output: n" ] }, { "point": "Basic Slicing", "description": "Slicing can be used to access a substring.", "code": [ "text = 'Python'", "print(text[0:2]) # Output: Py", "print(text[2:5]) # Output: tho" ] }, { "point": "Omitting Start or Stop", "description": "If start is omitted, slicing begins from the start of the string. If stop is omitted, slicing goes to the end of the string.", "code": [ "print(text[:2]) # Output: Py", "print(text[2:]) # Output: thon" ] }, { "point": "Using Negative Indices in Slicing", "description": "Negative indices can be used in slicing.", "code": [ "print(text[-4:-1]) # Output: tho", "print(text[-2:]) # Output: on" ] }, { "point": "Slicing with Step", "description": "The step can be used to skip characters.", "code": [ "print(text[::2]) # Output: Pto (every second character)", "print(text[::-1]) # Output: nohtyP (reversed string)" ] }, { "point": "String Immutability", "description": "Strings in Python are immutable, meaning they cannot be changed after creation. Indexing and slicing return new strings rather than modifying the original string.", "code": [ "modified_text = text[:2] + 'Z' + text[3:]", "print(modified_text) # Output: PyZhon" ] }, { "point": "Common Mistakes", "description": "Using an index that is out of range will raise an IndexError. Ensure start, stop, and step are within valid ranges." }, { "point": "Practical Use Cases", "description": "Indexing and slicing are useful for extracting substrings, reversing strings, and skipping characters for specific patterns.", "code": [ "# Extracting 'Hello'", "text = 'Hello, World!'", "print(text[:5]) # Output: Hello", "", "# Reversing the string", "print(text[::-1]) # Output: !dlroW ,olleH", "", "# Skipping every other character", "print(text[::2]) # Output: Hlo ol!" ] } ] }
      `;

    const promptTemplate = PromptTemplate.fromTemplate(
      `given the name of a technology/tech course along with the lesson name, mentioned below 
    
    technology/tech course: {technology_tech_course_name}
    lesson name: {lesson_name}
    
    please provide me with a brief explanation on {lesson_name} under {technology_tech_course_name} with a maximum of 10 bullet points and a minimum 1 bullet point 
    
    also, provide code blocks to explain concepts with appropriate comments in the code
    
    provide JSON as output
    below is a OUTPUT example that you should follow:
    {output_example_JSON}`,
    );

    const parser = new JsonOutputParser<LessonContent>();
    const chain = promptTemplate.pipe(model).pipe(parser);
    const result = await chain.invoke({
      technology_tech_course_name: technology_tech_course_name,
      lesson_name: lesson_name,
      output_example_JSON,
    });
    return result;
  }

  async getUserLesson(userEmail: string, lessonId: string) {
    const lesson = await this.Lesson.findOne({ userEmail, lessonId });
    return lesson;
  }

  async saveUserLesson(lesson: any) {
    const savedLesson = await this.Lesson.create(lesson);
    return savedLesson;
  }
  async setLessonStep(lessonId: string, stepId: string) {
    console.log(stepId);
    const x = await this.Lesson.findByIdAndUpdate(lessonId, {
      $set: {
        completedTill: stepId,
      },
    });
    console.log(x);
  }
}
