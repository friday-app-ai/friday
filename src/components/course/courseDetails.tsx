import { useEffect, useState } from "react";
import DetailList from "./detailList";
import { Course, Lesson, LessonContent } from "@/types";
import axios from "axios";
import { toast } from "sonner";

import { InfinitySpin } from "react-loader-spinner";
import LessonPage from "./lessonpage";
import { useSession } from "next-auth/react";

export default function CourseDetail({ courseId }: { courseId: string }) {
  const { data } = useSession();
  const [course, setCourse] = useState<Course>();
  const [loading, setLoading] = useState(false);
  const [lesson, setLesson] = useState<LessonContent | null>(null);
  const [lessonLoading, setLessonLoading] = useState(false);
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
  const handleGetLesson = async (lessonName: string, lessonId: string) => {
    try {
      setLessonLoading(true);
      console.log(data);
      console.log(data?.user?.email as string);
      const res = await axios.get("/api/lesson", {
        params: {
          userEmail: data?.user?.email as string,
          tech: course?.courseName,
          lessonName,
          lessonId,
        },
      });
      setLesson(res.data);
    } catch (error) {
      toast.error("Something went wrong, please try again ");
    } finally {
      setLessonLoading(false);
    }
  };
  useEffect(() => {
    getCourseDetails();
  }, []);
  return (
    <div className=" h-full max-h-screen  flex flex-col p-8   pt-4  overflow-hidden ">
      <header className="flex flex-col">
        <p className="text-[#00ADB5] font-bold text-3xl ">
          {course?.courseName}
        </p>
        <p className="mt-3 text-sm text-[#393E46]">
          {course?.courseDescription}
        </p>
      </header>
      <div className="flex py-8 h-full gap-5 w-full ">
        {loading ? (
          <div className="w-full h-full grid place-items-center">
            <InfinitySpin width="200" color="#00ADB5" />
          </div>
        ) : (
          course && (
            <>
              <DetailList
                courseName={course.courseName}
                modules={course?.modules}
                handleGetLesson={handleGetLesson}
              />
              <LessonPage lesson={lesson} loading={lessonLoading} />
            </>
          )
        )}
      </div>
    </div>
  );
}
