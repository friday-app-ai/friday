import Header from "@/components/head/header";
import React from "react";
import { ReactNode } from "react";

interface CourseLayoutProps {
  children: ReactNode;
}

const CourseLayout: React.FC<CourseLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="p-4 h-full">{children}</main>
    </div>
  );
};

export default CourseLayout;
