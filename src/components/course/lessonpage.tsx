import { Lesson } from "@/types";

interface IProp {
  lesson: Lesson | null;
}
export default function LessonPage({ lesson }: IProp) {
  return <div className="w-full h-full border-2 border-[#EEEEEE]"></div>;
}
