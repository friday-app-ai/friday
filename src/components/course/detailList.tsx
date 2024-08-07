import { Module } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
var md5 = require('md5');
interface IProp {
  modules: Module[];
  handleGetLesson: (lessonName: string, lessonId: string) => Promise<void>;
  courseName:String
}
import { usePathname } from "next/navigation";
export default function DetailList({ modules, handleGetLesson,courseName }: IProp) {
  const router = useRouter()
  const pathName = usePathname()
  return (
    <div className="w-[300px] max-h-full overflow-y-scroll ">
      <Accordion type="single" collapsible className="w-full">
        {modules.map((module, index) => {
          return (
            <AccordionItem
              className=" font-bold"
              value={module.moduleName}
              key={index}
            >
              <AccordionTrigger className="text-left font-medium text-xl">
                {module.moduleName}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3">
                  {module.lessons.map((lesson, index) => {
                    return (
                      <>
                      <div
                        className=" p-3 hover:bg-gray-300 cursor-pointer text-left "
                        key={index}
                        onClick={() =>
                          handleGetLesson(
                            lesson.lessonName,
                            lesson._id as string,
                          )
                        }
                      >
                        {lesson.lessonName}
                      </div>
                      <div className=" p-3 hover:bg-gray-300 bg-blue-300 cursor-pointer text-left "
                        key={index}
                        onClick={()=>router.push(`${pathName}/${md5(lesson.lessonName)}?lesson=${lesson.lessonName}&course=${courseName}`)}>

                      {`interview:  ${lesson.lessonName}`}
                      </div>
                      </>
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
