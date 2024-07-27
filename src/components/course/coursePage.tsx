import { Course } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import CourseCard from "./courseCard";
import { InfinitySpin } from "react-loader-spinner";

export default function CoursePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/course");
      setCourses(res.data);
    } catch (error) {
      toast.error("something went wrong, please try again");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col p-16">
      <h1 className="text-[#00ADB5]  text-3xl text-bold">Courses</h1>
      {loading ? (
        <div className="w-full h-full grid place-items-center">
          <InfinitySpin width="200" color="#00ADB5" />
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 mt-5">
          {courses.map((course, index) => {
            return (
              <CourseCard {...course} _id={course._id as string} key={index} />
            );
          })}
        </div>
      )}
    </div>
  );
}
