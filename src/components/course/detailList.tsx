import { Module } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface IProp {
  modules: Module[];
  handleGetLesson: (lessonName: string, lessonId: string) => Promise<void>;
}
export default function DetailList({ modules, handleGetLesson }: IProp) {
  return (
    <div className="w-[300px] max-h-full overflow-y-scroll ">
      <Accordion type="single" collapsible className="w-full">
        {modules.map((module) => {
          return (
            <AccordionItem className=" font-bold" value={module.moduleName}>
              <AccordionTrigger className="text-left font-medium text-xl">
                {module.moduleName}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3">
                  {module.lessons.map((lesson) => {
                    return (
                      <div
                        className=" p-3 hover:bg-gray-300 cursor-pointer text-left "
                        onClick={() =>
                          handleGetLesson(
                            lesson.lessonName,
                            lesson._id as string,
                          )
                        }
                      >
                        {lesson.lessonName}
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
