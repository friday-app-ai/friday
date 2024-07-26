import { useEffect, useState } from "react";
import DetailList from "./detailList";
import { Course, Lesson } from "@/types";
import axios from "axios";
import { toast } from "sonner";

import { InfinitySpin } from "react-loader-spinner";
import LessonPage from "./lessonpage";

export default function CourseDetail({ courseId }: { courseId: string }) {
  const [course, setCourse] = useState<Course>();
  const [loading, setLoading] = useState(false);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const getCourseDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/course?courseId=${courseId}`);
      setCourse(res.data);
    } catch (error) {
      toast.error("Something went wrong,please try again");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCourseDetails();
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col p-8  pb-4">
      <header className="flex flex-col">
        <p className="text-[#00ADB5] font-bold text-3xl ">
          {course?.courseName}
        </p>
        <p className="mt-3 text-sm text-[#393E46]">
          {course?.courseDescription}
        </p>
      </header>
      <div className="flex py-8 h-full gap-5">
        {loading ? (
          <div className="w-full h-full grid place-items-center">
            <InfinitySpin width="200" color="#00ADB5" />
          </div>
        ) : (
          course && (
            <>
              <DetailList modules={course?.modules} />
              <LessonPage lesson={lesson} />
            </>
          )
        )}
      </div>
    </div>
  );
}
