import { Explanation, Lesson, LessonContent } from "@/types";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Button } from "../ui/button";
import axios from "axios";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

import { atomDark, dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { a11yDark, docco, dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";


interface IProp {
  lesson: LessonContent | null;
  loading: boolean;
}
export default function LessonPage({ lesson, loading }: IProp) {
  const [steps, setSteps] = useState<Explanation[]>([]);
  const handleNext = async (index: number, stepId: string) => {
    await axios.patch("/api/lesson/step", {
      lessonId: lesson?._id,
      stepId,
    });
    setSteps([...(lesson?.explanation.slice(0, index + 2) as Explanation[])]);
    setTimeout(() => {
      document
        .getElementById(steps[steps.length - 1]._id)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  useEffect(() => {
    if (lesson) {
      if (!lesson?.completedTill) {
        setSteps([lesson?.explanation[0] as Explanation]);
      } else {
        const index = lesson.explanation.findIndex(
          (ex) => ex._id === lesson.completedTill,
        );
        setSteps([
          ...(lesson?.explanation.slice(0, index + 2) as Explanation[]),
        ]);
      }

      setTimeout(() => {
        document
          .getElementById(steps[steps.length - 1]._id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }
  }, [lesson]);
  return (
    <div className="w-full h-full border-2 bg-[#222831] overflow-hidden ">
      {loading ? (
        <div className="w-full h-full grid place-items-center">
          <InfinitySpin />
        </div>
      ) : (
        <div className="w-full h-full overflow-y-scroll flex flex-col   ">
          {steps.map((step, index) => {
            return (
              <div
                className="bg-[#222831] text-white p-3 flex flex-col gap-3"
                id={step._id}
              >
                {step.point && <div className="text-2xl">{step.point}</div>}
                {step.description && <div className="">{step.description}</div>}
                {step.code && step.code?.length > 0 && (
                    
                    <SyntaxHighlighter  language="javascript"  style={dracula}>
                    {step.code.join("\n")}
                  </SyntaxHighlighter>
                )}
                {lesson?.explanation &&
                  steps.length < lesson?.explanation?.length - 1 &&
                  index === steps.length - 1 && (
                    <Button
                      className="ml-auto"
                      onClick={() => handleNext(index, step._id)}
                    >
                      Next
                    </Button>
                  )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
