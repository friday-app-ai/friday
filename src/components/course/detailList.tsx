import { Module } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface IProp {
  modules: Module[];
}
export default function DetailList({ modules }: IProp) {
  return (
    <div className="w-[300px] max-h-full overflow-y-scroll">
      <Accordion type="single" collapsible className="w-full">
        {modules.map((module, index) => {
          return (
            <AccordionItem value={module.moduleName}>
              <AccordionTrigger>{module.moduleName}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-5">
                  {module.lessons.map((lesson) => {
                    return (
                      <div className=" p-4 hover:bg-gray-300 cursor-pointer ">
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
