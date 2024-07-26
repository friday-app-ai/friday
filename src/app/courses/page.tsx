import Header from "@/components/head/header";
import Course from "@/components/course/course";
import Link from "next/link";
// Static content
const courses = [
  {
    id: 1,
    title: "Python Basics",
    description:
      "An introductory course on Python programming, covering syntax, data types, and basic algorithms.",
    status: "Completed",
  },
  {
    id: 2,
    title: "Web Development with JavaScript",
    description:
      "Learn the fundamentals of web development using JavaScript, including DOM manipulation and event handling.",
    status: "Completed",
  },
  {
    id: 3,
    title: "Data Structures and Algorithms",
    description:
      "This course covers essential data structures and algorithms for efficient data processing and problem-solving.",
    status: "Non-completed",
  },
  {
    id: 4,
    title: "Machine Learning with Python",
    description:
      "Explore the basics of machine learning, including supervised and unsupervised learning techniques using Python.",
    status: "Non-completed",
  },
  {
    id: 5,
    title: "Advanced React",
    description:
      "Deep dive into advanced React features like hooks, context, and performance optimization techniques.",
    status: "Completed",
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    description:
      "Learn the basics of TypeScript, including type annotations, interfaces, and integration with JavaScript projects.",
    status: "Non-completed",
  },
  {
    id: 7,
    title: "Backend Development with Node.js",
    description:
      "Explore backend development using Node.js, covering topics like Express, databases, and RESTful APIs.",
    status: "Completed",
  },
  {
    id: 8,
    title: "Cloud Computing Fundamentals",
    description:
      "Understand the fundamentals of cloud computing, including services from AWS, Azure, and Google Cloud Platform.",
    status: "Non-completed",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center gap-6 p-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Courses</h1>
          <div className="grid justify-items-center align-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-6">
            {courses.map((course) => (
              <Course
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                status={course.status}
              />
            ))}
          </div>
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
