"use client";
import React, { useRef, useState } from "react";
import Header from "@/components/head/header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import design from "../../assets/artificial-intelligence.png";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Circles } from "react-loader-spinner";

const Page: React.FC = () => {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleCreateCourses = async (prompt: string) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/course/generate", {
        prompt,
      });
      console.log(res.data);
      router.push(`/courses/${res.data._id}`);
    } catch (error) {
      toast.error("Failed to create course");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    const text = textRef.current?.value;
    if (text) {
      handleCreateCourses(text);
    }
  };

  return (
    <div>
      <Header />
      <div className="grid w-full gap-2 mt-[15vh] px-[30%]">
        <div className="mb-[5rem] h-[20vh] flex justify-center align-items-center">
          <Image src={design} alt="design" priority width={200} height={80} />
        </div>
        <h1 className="text-center text-xl font-semibold">
          What do you want to learn today?
        </h1>
        <Textarea ref={textRef} placeholder="Write your topic" />
        <Button
          className="bg-blue-500 hover:bg-blue-700"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? <Circles width={20} /> : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default Page;
