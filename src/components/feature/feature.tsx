import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FeaturesSection: React.FC = () => {
  return (
    <div className="feature-1 py-6 md:py-12 mt-12 ">
      <div className="container px-4 mx-auto">
        <div className="flex -mx-4">
          <div className="px-4 text-center md:w-10/12 xl:w-8/12 mx-auto">
            <h1 className="mb-4 text-4xl font-light">What do we offer?</h1>
            <p className="mb-4 text-xl">
              Experience by generating custom courses based on user input. Users
              can ask real-time questions, tracked to ensure understanding, and
              take exams and AI-conducted interviews after each module. The AI
              adjusts course content based on performance, focusing on areas
              needing improvement. This creates a tailored and adaptive learning
              journey.
            </p>
          </div>
        </div>

        <div className="md:flex md:-mx-4 mt-12 md:pt-4">
          <div className="px-4 md:w-1/3 mt-6 md:mt-0">
            <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
              <div className="text-xl p-4 w-16 h-16 mx-auto">
                <i className="fas fa-bolt fa-2x text-cyan-600"></i>
              </div>
              <h5 className="text-xl font-medium mb-4">
                Real-time Doubt Solving in lessions
              </h5>
              <p className="text-gray-600 mb-3">
                Users can ask questions during the course. These questions are
                tracked to ensure the user fully understands the material.
              </p>
            </div>
          </div>
          <div className="px-4 md:w-1/3 mt-6 md:mt-0">
            <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
              <div className="text-xl p-4 w-16 h-16 mx-auto">
                <i className="fa-solid fa-chalkboard-user text-cyan-600 fa-2x"></i>
              </div>
              <h5 className="text-xl font-medium mb-4">
                Interviews powered by AI
              </h5>
              <p className="text-gray-600 mb-3">
                An AI interview is conducted using text-to-speech technology to
                ask questions. Based on the user performance in the exams and
                interviews, the AI adjusts the course content.
              </p>
            </div>
          </div>
          <div className="px-4 md:w-1/3 mt-6 md:mt-0">
            <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
              <div className="text-xl p-4 w-16 h-16 mx-auto">
                <i className="fa-solid fa-brain fa-2x text-cyan-600"></i>
              </div>
              <h5 className="text-xl font-medium mb-4">Adaptive Learning</h5>
              <p className="text-gray-600 mb-3">
                The system focuses on areas where the user needs improvement,
                providing an adaptive learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
