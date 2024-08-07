"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { InfinitySpin } from "react-loader-spinner";
export default function ChatWindow({
  params,
}: {
  params: { lessonID: string };
}) {
  const searchParams = useSearchParams();
  const lesson = searchParams?.get("lesson");
  const course = searchParams?.get("course");
  console.log(lesson, course);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [data, setData] = useState({history:[]});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input,setInput] = useState("")
  const endOfMessagesRef = useRef<HTMLDivElement>()
  console.log(params);
  useEffect(() => {
    async function getChat(lessonID: string,input?:string) {
      try {
        setLoading(true);
        let response = await axios.post(
          "http://localhost:3000/api/langchain/chatHistory",
          { session_id: lessonID }
        );

        if (response.data.history.length == 0) {
          response = await axios.post(
            "http://localhost:3000/api/langchain/conversational_interview",
            {
              lesson_name: lesson,
              technology_tech_course_name: course,
              input: input || "lets start the interview",
              session_id: lessonID,
            }
          );
          setData(response.data);
          setLoading(false);
        } else {
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getChat(params.lessonID);
  }, []);

  const addMessage = async(mess:string)=>{
    setLoading(true)
    const messages = await axios.post(
      "http://localhost:3000/api/langchain/conversational_interview",
      {
        lesson_name: lesson,
        technology_tech_course_name: course,
        input: mess,
        session_id: params.lessonID,
      }
    );
    setData(messages.data);
    setLoading(false);
  }

  const handelClick = () =>{
    if (textareaRef.current) {
      addMessage(textareaRef.current.value)
    }
  }

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [data]);
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col h-[600px] w-[850px] rounded-lg shadow-lg bg-background">
        <div className="bg-primary text-primary-foreground px-4 py-3 rounded-t-lg">
          <h2 className="text-lg font-medium">{course}</h2>
        </div>
        {loading ? (
          <div className="flex  justify-center items-center">
            <InfinitySpin />
          </div>
        ) : (
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {
              data.history.map((obj:any,index)=>{
                if(obj.id[2]=="HumanMessage"){
                  return(
                    <div key={index} className="flex items-start gap-3 justify-end">
                    <div className="bg-primary rounded-lg p-3 max-w-[70%] text-primary-foreground">
                      <p>{obj.kwargs.content}</p>
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </div>
                  )
                }else if(obj.id[2]=="AIMessage"){
                  return(
                    <div key={index} className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="AI" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3 max-w-[70%]">
                      <p>{obj.kwargs.content}</p>
                    </div>
                  </div>
                  )
                }
              })
            }
           
           <div ref={endOfMessagesRef}>
        </div>
        </div>
        )}
  
        <div className="bg-muted rounded-b-lg p-3 flex items-center gap-2">
          <Textarea
            ref={textareaRef}
            placeholder="Type your message..."
            className="flex-1 resize-none"
          />
          <Button onClick={handelClick}>
            <SendIcon className="w-5 h-5" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
