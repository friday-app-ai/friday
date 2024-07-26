import React from "react";
import Link from "next/link";

interface CourseProps {
  id: string;
  title: string;
  description: string;
}

const Course: React.FC<CourseProps> = ({ id, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[20vw] lg:w-[20vw] h-[35vh] flex flex-col p-4 border border-gray-200">
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between">
          <Link href={`/courses/${id}`} passHref>
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Go to Course
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
