import { Explanation, Lesson, LessonContent } from "@/types";
import { useEffect, useRef, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Button } from "../ui/button";
import axios from "axios";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import design from "../../assets/designer_logo.jpg";
import { atomDark, dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  a11yDark,
  docco,
  dracula,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";
import { toast } from "sonner";

interface IProp {
  lesson: LessonContent | null;
  loading: boolean;
}
export default function LessonPage({ lesson, loading }: IProp) {
  const [steps, setSteps] = useState<Explanation[]>([]);
  const [doubt, setDoubt] = useState<boolean>(false);
  const doubtRef = useRef<HTMLInputElement>(null);
  const handleAskDoubt = async (
    index: number,
    code: string[],
    description: string,
    courseName: string,
  ) => {
    try {
      const res = await axios.patch("/api/lesson/doubt", {
        index,
        lessonId: lesson?._id as string,
        lessonName: lesson?.lesson_name as string,
        courseName,
        code,
        description,
        doubt: doubtRef.current?.value,
      });
      setSteps([...steps, res.data]);
      setDoubt(false);
      setTimeout(() => {
        document
          .getElementById("scroll")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch (error) {
      toast.error("Some thing went wrong");
    }
  };
  const handleNext = async (index: number, stepId: string) => {
    await axios.patch("/api/lesson/step", {
      lessonId: lesson?._id,
      stepId,
    });
    setSteps([...(lesson?.explanation.slice(0, index + 2) as Explanation[])]);
    setDoubt(false);
    setTimeout(() => {
      document
        .getElementById("scroll")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  useEffect(() => {
    setDoubt(false);
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
        if (steps.length > 0) {
          document
            .getElementById("scroll")
            ?.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  }, [lesson]);

  return (
    <div className="w-full h-full border-2 bg-[#222831] overflow-hidden py-2  max-h-[800px] ">
      {lesson === null && !loading && (
        <div className="w-full h-full flex flex-col justify-center items-center gap-3 text-4xl text-white">
          <Image
            src={design}
            alt="design"
            height={200}
            className="rounded-full"
          ></Image>
          Please select a Lession to get Started!😁
        </div>
      )}
      {loading ? (
        <div className="w-full h-full grid place-items-center">
          <InfinitySpin />
        </div>
      ) : (
        <div className="w-full  max-h-[800px] overflow-y-scroll flex flex-col   ">
          {steps.map((step, index) => {
            return (
              <div
                className="bg-[#222831] text-white p-3 flex flex-col gap-3"
                id={step._id}
                key={step._id}
              >
                {step.point && <div className="text-2xl">{step.point}</div>}
                {step.description && <div className="">{step.description}</div>}
                {step.code && step.code?.length > 0 && (
                  <SyntaxHighlighter language="javascript" style={dracula}>
                    {step.code.join("\n")}
                  </SyntaxHighlighter>
                )}
                <div className="flex gap-3 ml-auto">
                  {lesson?.explanation && index === steps.length - 1 && (
                    <>
                      {doubt && (
                        <input
                          ref={doubtRef}
                          className="bg-gray-700  rounded-md px-3 "
                          placeholder="ask me a doubt "
                        />
                      )}
                      <Button
                        className=""
                        onClick={() => {
                          if (doubt) {
                            handleAskDoubt(
                              index + 1,
                              step.code ? step.code : [],
                              step.description,
                              lesson.technology,
                            );
                          } else {
                            setDoubt(true);
                          }
                        }}
                      >
                        ask doubt
                      </Button>
                      {doubt && (
                        <Button
                          onClick={() => {
                            setDoubt(false);
                          }}
                        >
                          close
                        </Button>
                      )}
                    </>
                  )}

                  {lesson?.explanation &&
                    steps.length < lesson?.explanation?.length - 1 &&
                    index === steps.length - 1 && (
                      <div className="flex gap-3 ">
                        <Button
                          className="ml-auto"
                          onClick={() => handleNext(index, step._id)}
                        >
                          Next
                        </Button>
                      </div>
                    )}
                </div>
              </div>
            );
          })}
          <div id="scroll" />
        </div>
      )}
    </div>
  );
}
