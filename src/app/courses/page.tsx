"use client";
import Course from "@/components/course/course";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { Course as CourseType } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { toast } from "sonner";
import { finished } from "stream";
// Static content

export default function Page() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(false);

  const getCourses = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/course/");
      setCourses(res.data);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong, please refresh");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center gap-6 p-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Courses</h1>
          {loading ? (
            <div className="w-full h-full grid place-items-center">
              <InfinitySpin />
            </div>
          ) : (
            <div className="grid justify-items-center align-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-6">
              {courses.map((course, index) => (
                <Course
                  key={index}
                  id={course._id as string}
                  title={course.courseName}
                  description={course.courseDescription}
                />
              ))}
            </div>
          )}
        </div>
        <div className="w-full max-w-xs bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Actions</h2>
          <div className="flex flex-col gap-4">
            <Link
              href="/addCourse"
              passHref
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              Create a New Course
            </Link>
            <Link
              href="/"
              passHref
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              Find a Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
