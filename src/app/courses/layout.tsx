import Header from '@/components/head/header';
import React from 'react';
import { ReactNode } from 'react';

interface CourseLayoutProps {
  children: ReactNode;
}

const CourseLayout: React.FC<CourseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default CourseLayout;
