import React from "react";
import Link from "next/link";

interface CourseProps {
  id: number;
  title: string;
  description: string;
  status: string;
}

const Course: React.FC<CourseProps> = ({ id, title, description, status }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[20vw] lg:w-[25vw] h-[35vh] flex flex-col p-4 border border-gray-200">
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between">
          <p className={`text-sm ${status === "Completed" ? "text-green-600" : "text-red-600"} font-medium`}>
            {status}
          </p>
          <Link href={`/courses/${id}`} passHref>
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Go to Course
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Course;
