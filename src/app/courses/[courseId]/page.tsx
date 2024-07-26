"use client";

import CourseDetail from "@/components/course/courseDetails";

export default function Page({ params }: { params: { courseId: string } }) {
  return <CourseDetail courseId={params.courseId} />;
}
